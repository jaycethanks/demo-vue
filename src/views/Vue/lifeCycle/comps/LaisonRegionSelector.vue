<template>
  <a-cascader
    :options="options"
    v-model="AA"
    style="width: 100%"
    :fieldNames="fieldNames" 
  >
    <!-- <template slot="displayRender" slot-scope="{ labels, selectedOptions }">
      <span v-for="(label, index) in labels" :key="selectedOptions[index].value">
        <span v-if="index === labels.length - 1">
          {{ label }} (<a @click="e => handleAreaClick(e, label, selectedOptions[index])">{{
            selectedOptions[index].code
          }}</a
          >)
        </span>
        <span v-else @click="onChange"> {{ label }} / </span>
      </span>
    </template> -->
  </a-cascader>
</template>
<script>
export default {
  props:{
    queryCode:{
      type:String,
      default:'0'
    }
    
  },
  data() {
    return {
      AA:['1', '2', '3'],
      options: [
        {
          value: '1',
          label: 'Zhejiang',
          children: [
            {
              value: '2',
              label: 'Hangzhou',
              children: [
                {
                  value: '3',
                  label: 'West Lake',
                  code: 752100,
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
                  code: 453400,
                },
              ],
            },
          ],
        },
      ],
      fieldNames:{
        label:'regionName',
        value:'id',
        children: 'children'
      },
    };
  },
  created(){
    console.log(this.queryCode,'--line77');
    // API.findById(this.queryCode).then(res=> {
    //   this.options = res.children
    // })    
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
    handleAreaClick(e, label, option) {
      e.stopPropagation();
      console.log('clicked', label, option);
    },
  },
};
</script>