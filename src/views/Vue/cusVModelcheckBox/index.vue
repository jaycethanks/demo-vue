<template>
  <div>
    <Child v-model="status" />
    状态：{{status}}
  </div>

</template>
<script>
import Child from "../cusVModelcheckBox/comps/child.vue"
export default {
  components: {
    Child
  },
  data() {
    return {
      status: true
    }
  }
}
</script>