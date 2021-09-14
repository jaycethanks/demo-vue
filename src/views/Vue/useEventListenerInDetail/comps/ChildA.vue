<template>
  <div>
    <button @click="$emit('cusE01','E01')">cusE01</button>
    <button @click="$emit('cusE02','E02','hello')">cusE02</button>
    <button @click="$emit('cusE03','E03','hello','world')">cusE03</button>
  </div>
</template>
<script>
export default {
  created(){
    this.$on(['cusE01','cusE02','cusE03'],(...params)=>{
      console.log(params,'--line12');
      // ['E01'] '--line12'
      // ['E02', 'hello'] '--line12'
      // ['E03', 'hello', 'world'] '--line12'
    })
  }
};
</script>
<style></style>

