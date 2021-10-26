<template>
  <div class="map-meter-wrapper">
    <RegionSelectorTree
      @onSelect="onSelect"
      @onCheckArea="handleCheckArea"
      @onSelectAll="onSelectAll"
      class="con-tree"
      ref="regionSelectorTree"
    >
      <template v-slot:tableTitle>
        <p style="padding:0 16px;margin:0">
          在地图中显示表号<a-switch
            style="float:right"
            :checked="showLabel"
            @change="onSwitchChange"
          />
        </p>
      </template>
    </RegionSelectorTree>
    <div id="map" class="con-map"></div>
  </div>
</template>
<script>
import RegionSelectorTree from "./comps/RegionSelectorTree.vue";
import GMAP from "./lib/GMAP.js";
// let defaultIcon = require("./statics/icon.png");
// let highlightIcon = require("./statics/icon1.png");

export default {
  components: {
    RegionSelectorTree,
  },
  data() {
    return {
      meterlist: [],
      showLabel: false,
      map: {
        mapInstance: null,
        markers: [], //map.markers
      },
      selectedMeters: [],
      defaultIcon: null, //图标的初始化中需要用到google实例，因此要确保在google实例被创建后才能加载此静态图标
      highlightIcon: null,
    };
  },
  created() {
    // 初始化地图
    const options = {
      // There are two required options for every map: center and zoom.
      center: { lat: -25.344, lng: 131.036 },
      zoom: 3,
      mapTypeControl: true,
    };
    this.map.mapInstance = GMAP.initMap(options, "map", (Instance) => {
      // map after init, callback function
      this.map.mapInstance = Instance;
      this.map.mapInstance.enableKeyDragZoom(); //开启地图shift框选表
      // init icon
      this.defaultIcon = GMAP.staticIcon.locateMark.redLM;
      this.highlightIcon = GMAP.staticIcon.locateMark.greyLM;
    });
  },
  mounted() {
    let _this = this;
    // 注册监听事件，当地图shift框选发生时 事件的回调
    GMAP.onAreaMarkersSelect((Bounds) => {
      for (var i = 0; i < this.map.markers.length; i++) {
        let marker = this.map.markers[i];
        if (Bounds.contains(marker.getPosition()) == true) {
          this.meterlist.forEach((_it) => {
            if (
              _it.latitude === marker.getPosition().lat() &&
              _it.longitude === marker.getPosition().lng()
            ) {
              _this.selectedMeters.push(_it);
              let label = marker.getLabel();
              label.color = "#d61c3c";
              marker.setLabel(label);
              marker.setIcon(this.highlightIcon);
              _this.$refs.regionSelectorTree.table.selectedRowKeys = _this.selectedMeters.map(
                (it) => it.meterId,
              );
            }
          });
        }
      }
    });
  },
  watch: {
    // selectedMeters: function(val) {
    //   console.log(this.selectedMeters, "--line55");
    // },
  },
  methods: {
    // If display marker's label on map ?
    onSwitchChange(val) {
      if (val) {
        this.map.markers.forEach((it, index) => {
          let label = it.getLabel();
          label.className = "marker-position";
          it.setLabel(label);
        });
      } else {
        this.map.markers.forEach((it) => {
          let label = it.getLabel();
          label.className = "hide-label";
          it.setLabel(label);
        });
      }
      this.showLabel = val;
    },
    /**
     * @description: emit callback trigger : when country(region/area) selected
     * @description: Selection Tree 组件，返回所有选中的表，有可能返回为一个空数组，有可能返回重复点，如第一次点击返回了A，第二次点击返回了A+B，应该做去重处理
     * @param {*} meterlist
     */
    handleCheckArea(meterlist) {
      console.log(meterlist, "--line113");
      if (!meterlist.length) {
        // 返回为空，即无选中区域，即无选中表 -> 清空地图
        GMAP.clearMarkers(this.map.markers); //清除所有Markers
        this.map.markers = [];
      } else {
        this.meterlist = meterlist;
        // --- Marker 渲染优化 start ---
        let locationsNew = meterlist.map((item) => {
          return {
            lat: item.latitude,
            lng: item.longitude,
          };
        });
        let locationsOld = this.map.markers.map((i) => {
          return {
            lat: i.getPosition().lat(),
            lng: i.getPosition().lng(),
          };
        });
        let locations = GMAP.utils.diff(locationsNew, locationsOld);
        //case 1: 1st:A, 2st:A+B, ==> should render B
        if (locationsOld.length < locationsNew.length) {
          this.map.markers = GMAP.addMarkers({
            locations,
            map: this.map.mapInstance,
            icon: this.defaultIcon,
          });
        } else if (locationsOld.length > locationsNew.length) {
          //case 2: 1st:A+B, 2st:A, ===> should remove B
          this.map.markers.forEach((it) => {
            locations.forEach((el) => {
              if (
                el.lat == it.getPosition().lat() &&
                el.lng == it.getPosition().lng()
              ) {
                it.setMap(null);
              }
            });
          });
        } else if (locations.length == 0) {
          //case 3: 1st.length == 2st.length
          console.log(
            "本不该发生，除非本地选中和上次选中点对象无差异",
            "--line153",
          );
        }
        // --- Marker 渲染优化 end ---

        // setLable & bind click evenlistener
        let _this = this;
        this.map.markers.forEach((it) => {
          _this.attachClickEventListener(it);
          meterlist.forEach((el) => {
            // 为所有marker 设定基本样式
            if (
              el.latitude === it.getPosition().lat() &&
              el.longitude === it.getPosition().lng()
            ) {
              it.setLabel({
                text: el.meterNumber,
                color: "grey",
                fontSize: "12px",
                className: "hide-label",
              });
            }
          });
        });

        GMAP.setCenterZoom(
          { center: locations[0], zoom: 20 },
          this.map.mapInstance,
        );
      }
    },
    // Marker Click EventListener : 当地图上Marker被点击时触发，对每一个marker起作用
    attachClickEventListener(marker) {
      let _this = this;
      marker.addListener("click", (a) => {
        // 点击的marker 是否存在于selectedMeters列表中
        let ifExist = _this.selectedMeters.some(
          (item) =>
            item.latitude === a.latLng.lat() &&
            item.longitude === a.latLng.lng(),
        );
        if (ifExist) {
          // 如果存在：1.移除， 2.修改label 和 marker颜色
          _this.selectedMeters.forEach((it, i) => {
            // 找到该存在项
            if (
              it.latitude === a.latLng.lat() &&
              it.longitude === a.latLng.lng()
            ) {
              _this.selectedMeters.splice(i, 1);
              let label = marker.getLabel();
              label.color = "grey";
              marker.setLabel(label);
              marker.setIcon(this.defaultIcon);
            }
          });
        } else {
          // 如果不存在： 1.push到列表， 2.修改label 和 marker 颜色
          _this.meterlist.forEach((_it) => {
            if (
              _it.latitude === a.latLng.lat() &&
              _it.longitude === a.latLng.lng()
            ) {
              _this.selectedMeters.push(_it);
              let label = marker.getLabel();
              label.color = "#d61c3c";
              marker.setLabel(label);
              marker.setIcon(this.highlightIcon);
            }
          });
        }
        // 更新dom
        _this.$refs.regionSelectorTree.table.selectedRowKeys = _this.selectedMeters.map(
          (it) => it.meterId,
        );
      });
    },
    // emit callback trigger : when meter selected from table
    onSelect(record, selectedRows) {
      this.selectedMeters = [];
      this.selectedMeters = selectedRows;
      let ifExist = this.selectedMeters.some(
        (item) => item.meterId === record.meterId,
      );
      //判断是否
      if (ifExist) {
        this.map.markers.forEach((it) => {
          if (
            it.getPosition().lat() === record.latitude &&
            it.getPosition().lng() === record.longitude
          ) {
            it.setIcon(this.highlightIcon);
            let label = it.getLabel();
            label.color = "#d61c3c";
            it.setLabel(label);
          }
        });
      } else {
        this.map.markers.forEach((it) => {
          if (
            it.getPosition().lat() === record.latitude &&
            it.getPosition().lng() === record.longitude
          ) {
            it.setIcon(this.defaultIcon);
            let label = it.getLabel();
            label.color = "grey";
            it.setLabel(label);
          }
        });
      }
    },
    // emit callback trigger : when all meters selected
    onSelectAll(selected, selectedRows) {
      if (selected) {
        this.selectedMeters = [];
        this.selectedMeters = selectedRows;
        this.map.markers.forEach((it) => {
          it.setIcon(this.highlightIcon);
          let label = it.getLabel();
          label.color = "#d61c3c";
          it.setLabel(label);
        });
      } else {
        this.selectedMeters = [];
        this.map.markers.forEach((it) => {
          it.setIcon(this.defaultIcon);
          let label = it.getLabel();
          label.color = "grey";
          it.setLabel(label);
        });
      }
    },
  },
  destroyed() {
    this.map.mapInstance.disableKeyDragZoom(); //移除监听器
  },
};
</script>
<style lang="css">
.map-meter-wrapper,
.con-tree,
.con-map {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  height: inherit;
}

.map-meter-wrapper {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
}
.con-tree {
  /* background-color: seagreen; */
  width: 600px;
}
.con-map {
  /* background-color: slateblue; */
  width: calc(100% - 600px);
}
.marker-position {
  display: inline !important;
  position: relative;
  bottom: 30px;
}
.hide-label {
  display: none !important;
}
</style>
