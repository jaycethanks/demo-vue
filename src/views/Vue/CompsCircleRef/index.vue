<template>
  <div>
    <p v-for="(folder, index) in list" :key="index">
      <span>{{ folder.path }}</span>
      <tree-folder-contents v-if="folder.child" :children="folder.child" />
    </p>
  </div>
</template>
<script>
// TreeFolderContents: () => import("./comps/TreeFolderContents.vue"),
import TreeFolderContents from "./comps/TreeFolderContents.vue";
export default {
  name: "tree-folder",
  props: ["folderList"],
  components: {
    TreeFolderContents,
    // TreeFolderContents: () => import("./comps/TreeFolderContents.vue"),
  },
  created() {
    if (this.folderList) {
      //第一层时:folderList为undefined
      this.list = this.folderList;
    }
  },
  data() {
    return {
      list: [
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
              // child: [
              //   {
              //     path: "0-2-1",
              //   },
              // ],
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
