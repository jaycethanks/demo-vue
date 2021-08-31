
<template>
  <div>
    this is child comp
    <input type="checkbox" :checked="cusProp" @change="onChange">
  </div>
</template>
<script>
export default {
  props:["cusProp"],
  model:{
    prop:'cusProp',
    event:'cusEvent'
  },
  methods: {
    onChange(e) {
      this.$emit('cusEvent', e.target.checked)
    }
  }
}

/**
<template>
  <div>
    this is child comp
    <input type="checkbox" :checked="checked" @change="onChange">
  </div>
</template>
<script>
export default {
  props:["checked"],
  methods: {
    onChange(e) {
      this.$emit('change', e.target.checked)
    }
  }
}
<\/script>
*/

</script>
