<template>
  <div>This is a simplest Components
    <subCUS/>
  </div>
</template>
<script>
import subCUS from './subcuscomp.vue'
export default {
  components:{
    subCUS
  },
  created(){
    console.log('created@from <---- cuscomp.vue','--line7');
  },
  mounted(){
    console.log('mounted@from <---- cuscomp.vue','--line10');
  }
}
</script>