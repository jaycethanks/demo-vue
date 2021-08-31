<template>
  <div>this is child comp
  <button @click="clickHandler">Click Test</button>

  </div>
</template>
<script>
export default {
 methods:{
   clickHandler(){
     this.$emit("customEvent","params str")
   }
 } 
}
</script>