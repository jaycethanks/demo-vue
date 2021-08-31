<!--
 * @Author: your name
 * @Date: 2021-05-25 16:17:14
 * @LastEditTime: 2021-07-13 10:36:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-vue\src\views\ChildFatherChild\index.vue
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="wrapper">
      <child-compa @sendHandler="sendHandler"/>
      <child-compb :recText="dataRec" />
    </div>
  </div>
</template>
<script>
import childCompa from './comps/childCompa.vue'
import childCompb from './comps/childCompb.vue'
export default {
  components: {
    childCompa,
    childCompb

  },
  data(){
    return{
      dataRec:''
    }
  },
  methods:{
    sendHandler(data){
      console.log(data,'--line30');
      this.dataRec = data
    }
  }
}
</script>
<style lang="scss">
#wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
  
</style>