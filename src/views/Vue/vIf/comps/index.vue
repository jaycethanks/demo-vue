<template>
  <div>child</div>
</template>
<script>
export default {
  created() {
    console.log("child created", "--line7");
  },
  mounted() {
    console.log("child mounted", "--line10");
  },
};
</script>
<style></style>
