<template>
  <div>
    <button @click="$emit('cusEvent', 'cusEvent trigger~')">Emit cusEvent</button>
    <button @click="$off('cusEvent')">destory cusEvent</button>
    <br>
    <button @click="$emit('cusOnceEvent','only once chance to trigger~~~')">Emit OnceEvent</button>
  </div>
</template>
<script>
export default {
  created() {
    this.$on("cusEvent", (msg) => {
      console.log(msg,'--line13');
    });
    this.$once("cusOnceEvent",(msg)=>{
      console.log(msg,'--line20');
    })
  },
};
</script>
<style scoped>
div *{
  margin: 20px;
}
</style>
