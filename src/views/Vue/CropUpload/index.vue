<template>
  <div>
    <my-upload
      field="img"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :width="300"
      :height="300"
      :params="params"
      :headers="headers"
      img-format="png"
    ></my-upload>
    <img :src="imgDataUrl" />
  </div>
</template>
<script>
import "babel-polyfill"; // es6 shim

import myUpload from "vue-image-crop-upload/upload-2.vue";
export default {
  data() {
    return {
      show: true,
      params: {
        token: "123456798",
        name: "avatar",
      },
      headers: {
        smail: "*_~",
      },
      imgDataUrl: "", // the datebase64 url of created image
    };
  },
  components: {
    "my-upload": myUpload,
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
      this.onSubmit(imgDataUrl);

      // console.log(this.imgDataUrl, "--line53");
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      // console.log(jsonData);
      // let res = await this.$axios({
      //   url:
      //     "https://a048a1af-2837-422c-85a5-d516712d3238.mock.pstmn.io/api/meters",
      //   method: "post",
      //   data: checkedKeys,
      //   headers: {
      //     "Content-Type": "application/json;charset=UTF-8",
      //   },
      // });
    },
    async onSubmit(imgBase64) {
      const file = DataURIToBlob(imgBase64);
      const formData = new FormData();
      formData.append("upload", file, "image.jpg");
      formData.append("profile_id", this.profile_id); //other param
      formData.append("path", "temp/"); //other param
      function DataURIToBlob(dataURI) {
        const splitDataURI = dataURI.split(",");
        const byteString =
          splitDataURI[0].indexOf("base64") >= 0
            ? atob(splitDataURI[1])
            : decodeURI(splitDataURI[1]);
        const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++)
          ia[i] = byteString.charCodeAt(i);
        return new Blob([ia], { type: mimeString });
      }
      let res = await this.$axios({
        method: "post",
        url: "api/dev-api/file/uploadImg",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res, "--line100");
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    },
  },
};
</script>
<style></style>
