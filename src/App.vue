<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="(item, index) in routes"
        :key="index"
        class="demo"
        :to="item.path"
        >{{ index }}. {{ item.name }}</router-link
      >
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: [],
      hello: "123",
    };
  },
  created() {
    this.$router.options.routes.forEach((element) => {
      let temp = {
        path: element.path,
        name: element.name,
      };
      if (
        temp.path != "/" &&
        temp.path != "*" &&
        temp.path != "/Common/Index"
      ) {
        this.routes.push(temp);
      }
    });
  },
};
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
  margin-bottom: 0px;

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
  display: flex !important;
}
.justify-center {
  justify-content: center !important;
}
.align-center {
  align-items: center !important;
}
.flex-column {
  flex-direction: column !important;
}
.flex-row {
  flex-direction: row !important;
}
</style>
