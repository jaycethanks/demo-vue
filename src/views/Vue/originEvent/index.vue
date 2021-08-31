<template>
  <div>
    <BaseInput v-model="value" @focus="onFocus" />
    <br />
    {{value}}
  </div>
</template>
<script>
import BaseInput from "../originEvent/comps/BaseInput.vue"
export default {
  components: {
    BaseInput
  },
  data() {
    return {
      value: 'init value'
    }
  },
  methods: {
    onFocus() {
      console.log("onfocus trigger!", '--line17');
    }
  }
}
</script>