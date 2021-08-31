<!--
 * @Author: jayce
 * @Date: 2021-05-26 09:20:58
 * @LastEditTime: 2021-06-11 18:17:41
 * @Description: 本demo用于尝试修改props值
 * @FilePath: \demo-vue\src\components\demo_props\Child.vue
 *  
-->
<!--
  通过用prop值去初始化一个新变量，然后修改这个新变量，达到目的
-->
<template>
  <div class="flex justify-center align-center flex-column">
    <div class="child-wrapper" v-bind="$attrs">
      <p id="12">{{value}}</p>
      <button @click="changeTheProps" class="btn">click to change the props</button>
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs:false,
  props: {
    value: {
      type: String,
      default: ''
    },

  },
  data(){
    return{
      midVariable:this.value//定义一个新的值，初始值来自prop
    }
  },
  mounted(){
    console.log(this.$attrs,'--line35');
    // console.log('子组件mounted触发','--line34');
  },
  methods:{
    changeTheProps(){//修改data中的值，而不直接修改prop
      console.log(this.value,'--line27');
      this.midVariable = "changed props"
    },
  },

}
</script>
<style lang="scss" scoped>
.child-wrapper {
  border: 1px solid grey;
  width: 300px;
  height: 200px;
}
.btn{
  margin-top: 50px;
}
</style>

// 小结：
通过在data中定义一个中间值，midVariable ， 其初始值为prop, 
然后在UI 渲染上，也取这个中间值， 修改也直接修改这个中间值，
prop传过来的值，仅在中间变量本创建的时候用于初始化，随后所有
的操作都是针对该中间值。 

官方文档对此有所说明：
https://cn.vuejs.org/v2/guide/components-props.html