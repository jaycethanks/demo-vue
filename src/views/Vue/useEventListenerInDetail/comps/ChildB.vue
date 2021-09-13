<template>
  <div>
    <button @click="$emit('cusOnceE01','OnceE01')">cusOnceE01</button>
    <button @click="$emit('cusOnceE02','OnceE02','hello')">cusOnceE02</button>
    <button @click="$emit('cusOnceE03','OnceE03','hello','world')">cusOnceE03</button>
  </div>
</template>
<script>
export default {
  created(){
    this.$once(['cusOnceE01','cusOnceE02','cusOnceE03'],(...params)=>{
      console.log(params,'--line12');
      //  以下输出仅在相应按钮点击时触发一次，立刻失效，即以下输出只能单次输出其中一个
      // ['OnceE01'] '--line12'
      // 或
      // ['OnceE02', 'hello'] '--line12'
      // 或
      // ['OnceE03', 'hello', 'world'] '--line12'
    })
  }
};
</script>
<style></style>

