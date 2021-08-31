<template>
  <a-modal v-model="visible" @ok="visible = false" @cancel="onModalCancel">
    <div class="title">Modal wrapper</div>
    <FengzhaungCascader ref='FengzhaungCascader' :init="initArr" @ok="onSelected"/>
  </a-modal>
</template>
<script>
import FengzhaungCascader from './cascader.vue'
export default {
  components:{FengzhaungCascader},
  data(){
    return{
      visible:false,
      initArr:[1,1,2]
    }
  },
  methods: {
    show(param){

      this.visible = true;
    },
    onSelected(value){
      console.log(value,'--line21');
    },
    onModalCancel(){
      this.$refs.FengzhaungCascader.vmodel = [];
    }
  },
}
</script>
<style scoped>
.title {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  font-weight: 600;
}
</style>