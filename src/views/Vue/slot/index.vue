<template>
  <Eassy title="this is a title">
    <template #header="{ anyName }">
      {{ anyName.default1 }}
    </template>
    <template #main>
      eassy main part: balabala....main...main.....
    </template>
    <template #footer>
      eassy footer part: bala...foooooooter....
    </template>
  </Eassy>
</template>
<script>
import Eassy from "./comps/Eassy.vue";
export default {
  components: {
    Eassy,
  },
  data() {
    return {
      hello: "this is hello",
    };
  },
};
</script>
