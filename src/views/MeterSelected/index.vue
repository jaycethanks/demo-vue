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
let defaultIcon = require("./statics/icon.png");
let highlightIcon = require("./statics/icon1.png");

export default {
  components: {
    RegionSelectorTree,
  },
  data() {
    return {
      showLabel: false,
      map: {
        mapInstance: null,
        markers: [], //map.markers
      },

      selectedMeters: [],
    };
  }, 
  created() {
    const options = {
      // There are two required options for every map: center and zoom.
      center: { lat: -25.344, lng: 131.036 },zoom: 10
    };
    this.map.mapInstance = GMAP.initMap(options, "map", (Instance) => {
      // callback function
      this.map.mapInstance = Instance;
            Instance.setTilt(45);
    });
  
  },
  watch:{
    selectedMeters:function(val){
      console.log(this.selectedMeters,'--line55');
    }
  },
  methods: {
    // If display marker's label on map ?
    onSwitchChange(val) {
      if (val) {
        this.map.markers.forEach((it) => {
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
      console.log(val, "--line49");
      this.showLabel = val;
    },
    // emit callback trigger : when country(region/area) selected
    handleCheckArea(meterlist) {
      GMAP.clearAllMarker();//先清除已有Marker
      let locations = meterlist.map((item) => {
        return {
          lat: item.latitude,
          lng: item.longitude,
        };
      });
      // 添加Label
      this.map.markers = GMAP.addMarkers({
        locations,
        map: this.map.mapInstance,
        icon: defaultIcon
      });
      // setLable
      this.map.markers.forEach((it) => {
        attachClickEvent(it);
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
      let _this = this;
      //event listener
      function attachClickEvent(marker) {
        // Marker Click EventListener
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
                marker.setIcon(defaultIcon);
              }
            });
          } else {
            // 如果不存在： 1.push到列表， 2.修改label 和 marker 颜色
            meterlist.forEach((_it) => {
              if (
                _it.latitude === a.latLng.lat() &&
                _it.longitude === a.latLng.lng()
              ) {
                _this.selectedMeters.push(_it);
                let label = marker.getLabel();
                label.color = "#d61c3c";
                marker.setLabel(label);
                marker.setIcon(highlightIcon);
              }
            });
          }
          _this.$refs.regionSelectorTree.table.selectedRowKeys = _this.selectedMeters.map(it=>it.meterId)
        });
      }
      GMAP.setCenterZoom({ center: locations[0], zoom: 20 }, this.map.mapInstance);
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
            it.setIcon(highlightIcon);
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
            it.setIcon(defaultIcon);
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
          it.setIcon(highlightIcon);
          let label = it.getLabel();
          label.color = "#d61c3c";
          it.setLabel(label);
        });
      } else {
        this.selectedMeters = [];
        this.map.markers.forEach((it) => {
          it.setIcon(defaultIcon);
          let label = it.getLabel();
          label.color = "grey";
          it.setLabel(label);
        });
      }
    },
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
  height: 900px;
  border: 1px solid red;
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
