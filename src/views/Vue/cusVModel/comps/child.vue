<template>
  <div>
    this is child comp
    <input type="text" :value="value" @input="onInputChange">
  </div>
</template>
<script>
export default {
  props:["value"],
  methods: {
    onInputChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>