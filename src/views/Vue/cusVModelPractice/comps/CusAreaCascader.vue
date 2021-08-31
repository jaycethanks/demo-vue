<template>
  <a-cascader :options="options" :value="onPropHandle" placeholder="Please select" @change="onChange" />
</template>
<script>
export default {
  props:['onPropHandle'],
  model:{
    prop:'onPropHandle',
    event:'onChangeHandle'
  },
  data() {
    return {
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onChange(value) {
      this.$emit('onChangeHandle',value)
    },
  },
};
</script>
