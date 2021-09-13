<template>
  <div>
    <LevelTwo>
      <LevelThree />
    </LevelTwo>
  </div>
</template>
<script>
import LevelTwo from "./comps/LevelTwo.vue";
import LevelThree from "./comps/LevelThree.vue";
export default {
  components: {
    LevelTwo,
    LevelThree,
  },
  data() {
    return {
      name: "index",
    };
  },
  provide: function() {
    return {
      indexFunc: this.indexFunc,
    };
  },
  methods: {
    indexFunc() {
      console.log("hello this is a fucntion from index");
    },
  },
};
</script>
<style></style>
