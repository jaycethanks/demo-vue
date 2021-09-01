<!--
 * @Author: jayce
 * @Date: 2021-05-25 16:17:14
 * @LastEditTime: 2021-07-14 14:33:44
 * @Description: 
 * @FilePath: \demo-vue\src\App.vue
 *  
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="(item,index) in routes" :key="index" class="demo" :to="item.path">{{index}}. {{item.name}}</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>


export default {
  data() {
    return {
      routes: []
    }
  },
  created() {
    this.$router.options.routes.forEach(element => {
      let temp = {
        path: element.path,
        name: element.name
      };
      if (temp.path != "/" && temp.path != "*") {
        this.routes.push(temp);
      }
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  border-bottom: 1px solid rgb(197, 197, 197);
  margin-bottom: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.demo::after {
  content: "(demo)";
  padding: 2px;
  vertical-align: top;
  font-size: 12px;
  color: #cc163a;
  text-decoration: none;
  display: inline-block;
}

.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}
.flex-column {
  flex-direction: column;
}
.flex-row {
  flex-direction: row;
}
</style>
