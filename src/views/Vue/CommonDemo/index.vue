<template>
<button @click="count++">click</button>
</template>
<script>
export default {
  data(){
    return{
      count:0
    }
  },
  watch:{
    count(val){
      console.log(val,'--line13');
    }
  }
}
</script>
<style>
</style>