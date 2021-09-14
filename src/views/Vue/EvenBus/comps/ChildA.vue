<template>
  <div>
    <p>Child A</p>
    <button @click="trigger">emit cusEvent</button>
  </div>
</template>

<script>
import Bus from './bus'
export default {
  data() {
    return {
      name: "jayce",
    };
  },
  methods:{
    trigger(){
      Bus.$emit('cusEvent',this.name)
    }
  }
};
</script>
<style></style>
