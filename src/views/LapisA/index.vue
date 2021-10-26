<template>
  <el-row :gutter="2">
    <el-col :span="24" :xs="24">
      <el-card shadow="never">
        <!-- header summary -->
        <section class="left-header-area">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="header-summary-block">d</div>
            </el-col>
            <el-col :span="8">
              <div class="header-summary-block">d</div>
            </el-col>
            <el-col :span="8">
              <div class="header-summary-block">d</div>
            </el-col>
          </el-row>
        </section>

        <!-- echart -->
        <section class="left-chart-area">
          <div style="height:500px;border:1px solid blue">
            <CommunicationStatics />
          </div>
        </section>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import CommunicationStatics from "./comps/CommunicationStatics.vue";
export default {
  components: {
    CommunicationStatics,
  },
};
</script>
<style scoped>
.header-summary-block {
  padding: 20px;
  width: 100%;
  height: 150px;
  border: 1px solid red;
}
.left-chart-area {
  margin-top: 20px;
}
.right-pie-chart-area {
  border: 1px solid green;
  height: 100%;
}
</style>
