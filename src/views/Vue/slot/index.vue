<template>
  <Eassy title="this is a title">
    <template v-slot:header="headerSlotField">
      title is :{{headerSlotField.anyname}}
    </template>
    <template v-slot:main>
      eassy main part: balabala....main...main.....
    </template>
    <template v-slot:footer>
      eassy footer part: bala...foooooooter....
    </template>
  </Eassy>
</template>
<script>
import Eassy from "./comps/Eassy.vue";
export default {
  components: {
    Eassy,
  }
};
</script>
