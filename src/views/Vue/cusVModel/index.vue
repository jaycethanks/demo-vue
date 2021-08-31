<template>
  <div>
    <Child v-model="message" />
    文字：{{message}}
  </div>

</template>
<script>
import Child from "./comps/child.vue"
export default {
  components: {
    Child
  },
  data() {
    return {
      message: 'init default'
    }
  }
}
</script>