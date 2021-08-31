<template>
  <div>This is a simplest SUB Components</div>
</template>
<script>
export default {
  created() {
    console.log('created@from <----SUB cuscomp.vue', '--line7');
  },
  mounted() {
    console.log('mounted@from <----SUB cuscomp.vue', '--line10');
  }
}
</script>