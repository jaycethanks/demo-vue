<template>
  <div>
    <Child inline-template>
      <div>
        <p>
          <progress :value="count" max="100"> </progress>
        </p>
        <!-- vue.runtime.esm.js?2b0e:619 [Vue warn]: Error in render: "TypeError: Cannot read properties of undefined (reading 'toString')" -->
        <!-- {{ name.toString }} -->
        <button @click="count++">click download</button>
      </div>
    </Child>
    <!-- [Vue warn]: Property or method "count" is not defined -->
    <!-- <button @click="count++">click download outside</button> -->
  </div>
</template>
<script>
import Child from "./comps/index.vue";
export default {
  components: {
    Child,
  },
  data() {
    return {
      num: 123,
    };
  },
};
</script>
