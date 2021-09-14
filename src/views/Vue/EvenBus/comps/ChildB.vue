<template>
<p>Child B</p>
</template>
<script>
import Bus from './bus'
export default {
  created(){
    Bus.$on('cusEvent',(par)=>{
      console.log(par,'--line7');
    })
  }
}
</script>
<style>
</style>