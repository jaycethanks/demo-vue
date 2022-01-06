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
        }"
      >
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          closable
          :type="tag.type"
          :style="{ margin: tagMargin }"
        >
          {{ tag.name }}
        </el-tag>
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
            :icon-class="tree.nodeIcon"
          >
          </el-tree>
        </div>
      </el-card>
      <!-- Left Side Card End -->

      <!-- Right Side Card End -->
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
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
        dynamicProps: {
          children: "children",
          label: (data, node) => {
            return data.title || data.name || data.realname;
          },
        },
        data: {
          dept: [],
          role: [],
          member: [],
        },
      },
      tags: [
        { name: "标签一标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三标签一标签一", type: "info" },
        { name: "标签四标签", type: "warning" },
        { name: "标签五标", type: "danger" },
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
      this.tree.data.dept = mockdept.data;
      // prettier-ignore
      this.tree.data.role = mockrole.data;
      // prettier-ignore
      this.tree.data.person = mockmember.data;
      this.setType();
    },
    handleClose(done) {
      this.$emit("cusEvent", false);
    },
    setType() {
      // 定义最后选中的项的type, 用于radio 切换时的回显标识
      this.tree.data.dept.type = "4";
      this.tree.data.role.type = "2";
      this.tree.data.person.type = "1";
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
      //TODO fix role tab 下icon 不显示问题 +》 已知是数据问题导致
      this.tree.nodes = [];
      switch (e) {
        case "dept": {
          this.tree.nodes = this.tree.data.dept;
          this.setFilterTargetField("title");
          break;
        }
        case "role": {
          this.tree.nodes = this.tree.data.role;
          this.setFilterTargetField("name");

          break;
        }
        case "person": {
          this.tree.nodes = this.tree.data.person;
          this.setFilterTargetField("realname");
          // this.tree.nodeIcon = "el-icon-star-on";
          break;
        }
      }
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
      this.tags = nodeStatus.checkedNodes;
      //TODO 选中节点，到tags池
      console.log(nodeStatus, "--line237");
    },

    /**
     *
     * Tree Component Methods END
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
