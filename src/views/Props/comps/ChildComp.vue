<template>
  <div class="child-wrapper">
    <h1>child component</h1>
    <div class="child-div" v-bind="$attrs">
      这是子组件中的div block
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,

  
}
</script>
<style lang="css">
.child-div{
  border: 1px solid deeppink;
  width: 200px;
  height: 100px;
}
.child-wrapper{
  border: 1px solid #a5a5a5;
}
  
</style>