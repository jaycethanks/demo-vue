<template>
  <a-cascader :options="options" :value="vValue || init" placeholder="Please select" @change="onChange" />
</template>
<script>
export default {
  props: {
    init: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  created() {
    console.log(this.init, '--line15');
  },

  data() {
    return {
      vValue: undefined,
      options: [
        {
          value: 1,
          label: 'Zhejiang',
          children: [
            {
              value: 1,
              label: 'Hangzhou',
              children: [
                {
                  value: 2,
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 2,
          label: 'Jiangsu',
          children: [
            {
              value: 1,
              label: 'Nanjing',
              children: [
                {
                  value: 2,
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
      this.vmodel = value;
      this.$emit('ok', value)
    },
  },
};
</script>
