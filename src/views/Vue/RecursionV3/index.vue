<template>
  <div style="width:100%;height:100%">
    <BoxRecursion :dirlist="dirlist" />
  </div>
</template>
<script>
import BoxRecursion from "./comps/BoxRecursion.vue";
export default {
  components: {
    BoxRecursion,
  },
  data() {
    return {
      dirlist: [
        {
          path: "0",
          child: [
            {
              path: "0-1",
              child: [
                {
                  path: "0-1-1",
                },
              ],
            },
            {
              path: "0-2",
              child: [
                {
                  path: "0-2-1",
                },
              ],
            },
            {
              path: "0-3",
            },
          ],
        },
        {
          path: "1",
        },
        {
          path: "2",
        },
        {
          path: "3",
          child: [
            {
              path: "3-1",
              child: [
                {
                  path: "3-1-1",
                },
              ],
            },
            {
              path: "3-2",
              child: [
                {
                  path: "3-2-1",
                  child: [
                    {
                      path: "3-2-1-1",
                      child: [
                        {
                          path: "3-2-1-1-1",
                        },
                        {
                          path: "3-2-1-1-2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
<style></style>
