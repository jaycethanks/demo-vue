<template>
<div>
<Child/>

</div>
</template>
<script>
import Child from "./comps/index.vue"
export default {
  components:{
    Child
  },
  methods:{
    cusHandler(){
      console.log("cus func trigger~",'--line12');
    }
  }
}
</script>
<style>
</style>