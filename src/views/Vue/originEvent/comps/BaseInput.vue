<template>
  <label for="inputele">
    base input:
    <input name="inputele" :value="value" type="text" v-on="inputListenersObj">
  </label>
</template>
<script>
export default {
  props: ['value'],
  computed: {
    inputListenersObj: function () {
      let _this = this;
      return Object.assign({},_this.$listeners,{
        input:function(e){
          _this.$emit('input',e.target.value)
        }
      })
    }
  }
};
</script>