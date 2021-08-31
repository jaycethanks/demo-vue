<!--
 * @Author: your name
 * @Date: 2021-05-25 16:19:31
 * @LastEditTime: 2021-05-25 16:33:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-vue\src\components\childCompb.vue
-->
<template>
  <div>
    <section>
      <h1>Comp B</h1>
      {{recText}}
    </section>
  </div>
</template>
<script>
export default {
  props:['recText']
  
}
</script>
<style lang="scss" scoped>
section {
  width: 300px;
  height: 300px;
  border: 1px solid rgb(25, 0, 255);
}
</style>