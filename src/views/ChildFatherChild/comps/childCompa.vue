<!--
 * @Author: your name
 * @Date: 2021-05-25 16:19:31
 * @LastEditTime: 2021-05-25 16:30:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-vue\src\components\childCompb.vue
-->
<template>
  <div>
    <section>
      <h1>Comp A</h1>
      <input type="text" v-model="inputText">
      <button @click="send">transfer</button>
    </section>

  </div>
</template>
<script>
export default {
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    send() {
      this.$emit('sendHandler',this.inputText)
    }
  }


}
</script>
<style lang="scss" scoped>
section {
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
</style>