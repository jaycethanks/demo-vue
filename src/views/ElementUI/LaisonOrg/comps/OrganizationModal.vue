<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    :width="width + '%'"
    :before-close="handleClose"
    style="padding:0!important"
  >
    <div class="org-container">
      <el-card
        style="margin-bottom:10px"
        class="box-card"
        shadow="never"
        :body-style="{
          maxHeight: '600px',
          padding: '10px',
        }"
      >
        <span v-for="(item, index) in tags" :key="index">
          <!-- prettier-ignore -->
          <el-tag
          v-for="(tag, _index) in item.taglist"
          :key="_index"
          closable
          :type="item.type === 'dept' ? 'success' : item.type === 'role' ? 'warning' : item.type === 'person' ? 'info' : 'error'"
          :style="{ margin: tagMargin }"
          @close="handleTagClose(tag)"
        >
          <!-- {{ tag.item[tree.filterTargetField] }} -->
          {{tag[item.type === 'dept' ? 'title' : item.type === 'role' ? 'name' : 'realname']}}
        </el-tag>
        </span>
      </el-card>

      <el-card
        class="box-card"
        shadow="never"
        :body-style="{ minHeight: '500px', paddingTop: '20px' }"
      >
        <div
          style="display:flex;justify-content:space-between;align-items:center"
        >
          <el-radio-group
            v-model="radio"
            :size="elementSize"
            @change="onRadioChange"
          >
            <el-radio-button label="dept">部门</el-radio-button>
            <el-radio-button label="role">角色</el-radio-button>
            <el-radio-button label="person">人员</el-radio-button>
          </el-radio-group>
          <el-input
            style="width:200px"
            :placeholder="serachPlaceHolder"
            prefix-icon="el-icon-search"
            v-model="tree.filterText"
            :size="elementSize"
          >
          </el-input>
        </div>

        <div style="margin-top: 20px;overflow-y:auto;max-height: 600px;">
          <el-tree
            @node-expand="nodeExpand"
            @node-collapse="nodeCollapse"
            @check="handleNodeCheck"
            ref="tree"
            :filter-node-method="filterNode"
            :props="tree.dynamicProps"
            :data="tree.nodes"
            show-checkbox
            default-expand-all
            :icon-class="tree.nodeIcon"
            node-key="id"
          >
          </el-tree>
        </div>
      </el-card>
      <!-- Left Side Card End -->

      <!-- Right Side Card End -->
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleOk">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import mockrole from "./mockrole";
import mockdept from "./mockdept";
import mockmember from "./mockmember";
export default {
  name: "OrganizationModal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "组织架构",
    },
    elementSize: {
      type: String,
      default: "small",
    },
    breadcrumbFontSize: {
      type: String,
      default: "14px",
    },
    breadcrumbOmit: {
      type: Number,
      default: 5,
    },
    width: {
      type: Number,
      default: 60,
    },
    serachPlaceHolder: {
      type: String,
      default: "请输入内容",
    },
    tagMargin: {
      type: String,
      default: "0 5px 5px 0",
    },
  },
  model: {
    event: "cusEvent",
    prop: "visible",
  },
  data() {
    return {
      radio: "role",
      tree: {
        filterText: "",
        filterTargetField: "",
        nodeIcon: "",
        // tree Start
        nodes: [],
        defaultExpandedKeys: [],
        dynamicProps: {
          children: "children",
          label: (data, node) => {
            return data.title || data.name || data.realname;
          },
        },
        data: {
          dept: { src: [], checkedlist: [] },
          role: { src: [], checkedlist: [] },
          person: { src: [], checkedlist: [] },
        },
      },
      tags: [
        { type: "dept", taglist: [] },
        { type: "role", taglist: [] },
        { type: "person", taglist: [] },
      ],
    };
  },
  watch: {
    "tree.filterText": {
      handler: function(val) {
        this.$refs.tree.filter(val);
      },
    },
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      // mock axios
      // prettier-ignore
      this.tree.data.dept.src = mockdept.data;
      // prettier-ignore
      this.tree.data.role.src = mockrole.data;
      // prettier-ignore
      this.tree.data.person.src = mockmember.data;
      this.init();
      this.setType();
    },
    handleClose(done) {
      this.$emit("cusEvent", false);
    },
    handleOk() {},
    init() {
      this.radio = "dept";
      this.tree.nodes = this.tree.data.dept.src;
      this.setFilterTargetField("title");
    },
    setType() {
      // 定义最后选中的项的type, 用于radio 切换时的回显标识
      this.tree.data.dept.src.type = "4";
      this.tree.data.role.src.type = "2";
      this.tree.data.person.src.type = "1";
    },
    setFilterTargetField(label) {
      this.tree.filterTargetField = label;
    },
    /**
     *
     *  Custom Methods END
     *
     * */

    onRadioChange(e) {
      let label = e === "dept" ? "title" : e === "role" ? "name" : "realname";
      this.setFilterTargetField(label); // set label
      this.tree.nodes = this.tree.data[e].src; // set current tree nodes
      this.setCheckedNodes(this.tree.data[e].checkedlist); //回显当前tree 选中状态
      this.$forceUpdate();
    },
    /**
     *
     * Radio Component Methods END
     *
     * */

    nodeExpand(currentNode, nodeStatus, nodeInstance) {
      let label = currentNode[this.tree.filterTargetField];
    },
    nodeCollapse(currentNode, nodeStatus, nodeInstance) {
      let label = currentNode[this.tree.filterTargetField];
    },
    filterNode(value, data) {
      // label 值是变化的
      if (!value) return true;
      return data[this.tree.filterTargetField].indexOf(value) !== -1;
    },
    handleNodeCheck(currentNode, nodeStatus) {
      //nodeStatus : checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys
      // prettier-ignore
      this.tree.data[this.radio].checkedlist = this.getCheckedNodes(); //更新checklist
      // this.tree.data[this.radio].checkedlist = nodeStatus.checkedNodes; //更新checklist
      let tag = this.tags.find((it) => it.type === this.radio);
      tag.taglist = nodeStatus.checkedNodes; //更新taglist
    },
    setCheckedNodes(arr) {
      debugger;
      this.$refs.tree.setCheckedNodes(arr);

      // this.tree.defaultExpandedKeys = arr.map((it) => {
      //   return { id: it.id };
      // });
    },
    getCheckedNodes() {
      return this.$refs.tree.getCheckedNodes();
    },
    removeCheckedNode(targetTag) {
      /** 删除某个节点时有一些规则：*/
      /** 1.如果删除父节点，则删除该节点下的所有子节点 */
      if (!targetTag.item.isLeaf) {
        let currentNodes = this.getCheckedNodes(); //获取当前所有checked节点
        let index = currentNodes.findIndex((it) => it.id === targetTag.item.id); //先找到当前节点，并删除
        index != -1 && currentNodes.splice(index, 1);
        targetTag.item.children.forEach((subitem) => {
          // 对于每个子节点， 找到其在currentNode 中的位置，并删除
          let index = currentNodes.findIndex((it) => it.id === subitem.id); //找到当前节点，并删除
          index != -1 && currentNodes.splice(index, 1);
          // 删除对应的tags
          let tagIndex = this.tags.findIndex((it) => it.item.id === subitem.id);
          tagIndex != -1 && this.tags.splice(tagIndex, 1);
        });

        this.setCheckedNodes(currentNodes);
        return;
      }

      /** 2.删除某个子节点时， 父节点需要一并删除,否则删不掉 */
      let currentNodes = this.getCheckedNodes(); //获取当前所有checked节点
      let index = currentNodes.findIndex((it) => it.id === targetTag.item.id); //找到当前节点，并删除
      index != -1 && currentNodes.splice(index, 1);
      // prettier-ignore
      let fatherNodeIndex = currentNodes.findIndex((it) => it.id === targetTag.item.parentId); //找到父节点，并删除
      fatherNodeIndex != -1 && currentNodes.splice(fatherNodeIndex, 1);

      // prettier-ignore
      let tagIndex = this.tags.findIndex((it) => it.item.id === targetTag.item.parentId); // 删除父节点tag
      tagIndex != -1 && this.tags.splice(tagIndex, 1);
      this.setCheckedNodes(currentNodes);
    },

    /**
     *
     * Tree Component Methods END
     *
     * */

    handleTagClose(targetTag) {
      let index = this.tags.findIndex((it) => it.item.id === targetTag.item.id);
      index != -1 && this.tags.splice(index, 1); // 删除当前tag
      this.removeCheckedNode(targetTag);
    },

    /**
     *
     * Tag Components Methods END
     *
     * */

    /**
     *
     * utils function
     *
     * */
    omit(str) {
      if (str.length > this.breadcrumbOmit) {
        return str.slice(0, this.breadcrumbOmit) + "...";
      } else {
        return str;
      }
    },
  },
};
</script>
<style scoped>
>>> .el-dialog__footer {
  padding: 10px;
}
>>> .el-dialog__body {
  padding: 10px;
  height: "auto";
}
.org-container {
  width: 100%;
  height: "auto";
  /* background-color: #f40; */
  /* display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column; */
  /* gap: 10px; */
}
>>> .el-radio-group {
  /* display: flex; */
}
>>> label.el-radio-button {
  /* flex: 1; */
}
>>> span.el-radio-button__inner {
  /* display: block; */
  user-select: none;
}
</style>
