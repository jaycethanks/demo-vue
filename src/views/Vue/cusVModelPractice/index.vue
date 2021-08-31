<template>
  <div>
    <cus-area-cascader v-model="cascaderSelected"/>
    当前选中区域：{{cascaderSelected}}
  </div>

</template>
<script>
import CusAreaCascader from "../cusVModelPractice/comps/CusAreaCascader.vue"
export default {
  components: {
    CusAreaCascader
  },
  data() {
    return {
      cascaderSelected: ['zhejiang', 'hangzhou','xihu']
    }
  }
}
</script>