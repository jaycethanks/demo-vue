<template>
  <div>
    <div class="option-area">
      <vueCropper
        style="width:500px;height:500px"
        ref="cropper"
        :img="option.img"
        :outputSize="option.size"
        :outputType="option.outputType"
        :info="true"
        :full="option.full"
        :canMove="option.canMove"
        :canMoveBox="option.canMoveBox"
        :fixedBox="option.fixedBox"
        :original="option.original"
        :autoCrop="option.autoCrop"
        :autoCropWidth="option.autoCropWidth"
        :autoCropHeight="option.autoCropHeight"
        :centerBox="option.centerBox"
        :high="option.high"
        :infoTrue="option.infoTrue"
        :maxImgSize="option.maxImgSize"
        @realTime="realTime"
        @imgLoad="imgLoad"
        @cropMoving="cropMoving"
        :enlarge="option.enlarge"
        :mode="option.mode"
        :limitMinSize="option.limitMinSize"
      ></vueCropper>
      <div class="preview-solid-style">
        <div class="preview-top child-box">
          <div :style="previewStyle">
            <div :style="previews.div">
              <img :src="previews.url" :style="previews.img" />
            </div>
          </div>
        </div>
        <div class="preview-btm child-box">
          <div :style="previewStyle">
            <div :style="previews.div">
              <img :src="previews.url" :style="previews.img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <input
        ref="uploadImg"
        type="file"
        id="uploads"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="uploadImg($event, 1)"
      />
    </div>
  </div>
</template>
<script>
import { VueCropper } from "vue-cropper";

export default {
  components: {
    VueCropper,
  },
  data() {
    return {
      option: {
        img: "",
        size: 1,
        full: false,
        outputType: "png",
        canMove: true,
        fixedBox: false,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 200,
        autoCropHeight: 200,
        centerBox: false,
        high: false,
        cropData: {},
        enlarge: 1,
        mode: "contain",
        maxImgSize: 3000,
        limitMinSize: [100, 120],
      },
      previews: {},
      previewStyle: {},
    };
  },
  methods: {
    changeImg() {
      this.option.img = this.lists[~~(Math.random() * this.lists.length)].img;
    },
    startCrop() {
      // start
      this.crap = true;
      this.$refs.cropper.startCrop();
    },
    stopCrop() {
      //  stop
      this.crap = false;
      this.$refs.cropper.stopCrop();
    },
    clearCrop() {
      // clear
      this.$refs.cropper.clearCrop();
    },
    refreshCrop() {
      // clear
      this.$refs.cropper.refresh();
    },
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    finish(type) {
      // 输出
      // var test = window.open('about:blank')
      // test.document.body.innerHTML = '图片生成中..'
      if (type === "blob") {
        this.$refs.cropper.getCropBlob((data) => {
          var img = window.URL.createObjectURL(data);
          this.model = true;
          this.modelSrc = img;
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.model = true;
          this.modelSrc = data;
        });
      }
    },
    // 实时预览函数
    realTime(data) {
      var previews = data;
      var h = 0.5;
      var w = 0.5;

      this.previewStyle = {
        width: previews.w + "px",
        height: previews.h + "px",
        overflow: "hidden",
        margin: "0",
        zoom: 240 / previews.w,
      };
      this.previews = data;
    },

    finish2(type) {
      this.$refs.cropper2.getCropData((data) => {
        this.model = true;
        this.modelSrc = data;
      });
    },
    finish3(type) {
      this.$refs.cropper3.getCropData((data) => {
        this.model = true;
        this.modelSrc = data;
      });
    },
    down(type) {
      // event.preventDefault()
      // 输出
      if (type === "blob") {
        this.$refs.cropper.getCropBlob((data) => {
          this.downImg = window.URL.createObjectURL(data);
          if (window.navigator.msSaveBlob) {
            var blobObject = new Blob([data]);
            window.navigator.msSaveBlob(blobObject, "demo.png");
          } else {
            this.$nextTick(() => {
              this.$refs.downloadDom.click();
            });
          }
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.downImg = data;
          if (window.navigator.msSaveBlob) {
            var blobObject = new Blob([data]);
            window.navigator.msSaveBlob(blobObject, "demo.png");
          } else {
            this.$nextTick(() => {
              this.$refs.downloadDom.click();
            });
          }
        });
      }
    },

    uploadImg(e, num) {
      //上传图片
      // this.option.img
      var file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = (e) => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          this.option.img = data;
        } else if (num === 2) {
          this.example2.img = data;
        }
        this.$refs.uploadImg.value = "";
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },
    imgLoad(msg) {
      console.log(msg);
    },

    cropMoving(data) {
      this.option.cropData = data;
    },
  },
};
</script>
<style scoped>
.option-area {
  border: 1px solid #efefef;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
}
.preview-solid-style {
  /* background-color: #555; */
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

  /* border: 1px solid blue; */
}
.child-box {
  box-sizing: border-box;
  border: 1px solid #eee;
  background: #555;
  width: 240px;
  height: 240px;
}
.preview-top {
  clip-path: circle(48%);
  border-bottom: none;
}
</style>
