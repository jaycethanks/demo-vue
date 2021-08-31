
<template>
  <div>
    <a-spin :spinning="spinning" :delay="1500">
      <div class="spin-content">
        <div>
          <a-date-picker @change="onChange" />
          <br />
          <a-month-picker placeholder="Select month" @change="onChange" />
          <br />
          <a-range-picker @change="onChange" />
          <br />
          <a-week-picker placeholder="Select week" @change="onChange" />
        </div>
        <div style="width: 500px">
          <a-radio-group v-model="mode" :style="{ marginBottom: '8px' }">
            <a-radio-button value="top">
              Horizontal
            </a-radio-button>
            <a-radio-button value="left">
              Vertical
            </a-radio-button>
          </a-radio-group>
          <a-tabs default-active-key="1" :tab-position="mode" :style="{ height: '200px' }" @prevClick="callback" @nextClick="callback">
            <a-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`"> Content of tab {{ i }} </a-tab-pane>
          </a-tabs>
        </div>
        可以点击‘切换’按钮，控制本区域的spin展示。
      </div>
    </a-spin>
    Loading state：
    <a-switch v-model="spinning" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      spinning: false,
      mode: 'top',
    };
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    callback(val) {
      console.log(val);
    },
  },
};
</script>
