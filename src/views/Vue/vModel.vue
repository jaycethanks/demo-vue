<!--
 * @Author: jayce
 * @Date: 2021-07-16 12:06:50
 * @LastEditTime: 2021-07-16 13:07:41
 * @Description: 
 * @FilePath: \demo-vue\src\views\Vue\vModel.vue
 *  
-->

<template>
  <div>
    <a-input type="text" v-model="input.value" @change="change"></a-input>
  </div>
</template>
<script>
export default {
  data(){
    return{
      input:{}
    }
  },
  methods:{
    change(){
      console.log(1,'--line23');
    }
  },
  mounted(){
    // setInterval(()=>{
      // this.$set(this.input,'value',new Date().toString())
      // // this.input.value = new Date().toString();
      // console.log(this.input,'--line30');
    // },1000)
  }
}

</script>