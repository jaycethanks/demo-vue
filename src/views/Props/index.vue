<!--
 * @Author: jayce
 * @Date: 2021-05-26 08:49:15
 * @LastEditTime: 2021-07-13 10:35:51
 * @Description: 本demo用于尝试修改props值
 * @FilePath: \demo-vue\src\views\Props\index.vue
 *  
-->
<template>
  <div class="father-wrapper">
    <h1>father component</h1>
    <ChildComp attribute1="hello"/>
  </div>
</template>
<script>
import ChildComp from './comps/ChildComp.vue'
export default {
  components:{
    ChildComp
  },
  data(){
    return{
      msg:'"hello world this is from father"'
    }
  },

  mounted(){
    // console.log('父组件mounted触发','--line26');
    setInterval(()=>{
      this.msg = new Date().toString()
    },1000)
  }

  
}
</script>
<style>
.father-wrapper{
  margin-top: 100px;
  border: 1px solid #333;
}
  
</style>