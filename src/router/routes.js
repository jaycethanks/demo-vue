//routes.js
//递归获取 views 文件夹下的所有.vue文件
const files = require.context("@/views", true, /\.vue$/);
let initArr = [];
let levelI = [];
let levelII = [];

files.keys().forEach((key) => {
  // 首次处理，生成所有vue文件名数组
  let initFilter = key.replace(/(\.\/|\.vue)/g, "").replace(" ", "");
  let path = files(key).default.__file;
  initArr.push({ name: initFilter, path: path });
});

levelist();
function levelist() {
  // 分离出一级和二级目录
  initArr.forEach((item) => {
    let I = item.name.split("/")[0];
    let II = item.name.split("/")[1];
    let path = item.path;
    if (path.includes(I + "/index.vue")) {
      levelI.push({ name: I, path: path, child: [] });
    }
    if (path.includes(II + "/index.vue")) {
      levelII.push({ name: II, path: path });
    }
  });
}

// 合并levelII --> levelI
levelII.forEach((item) => {
  levelI.forEach((it) => {
    if (item.path.includes(it.path.replace("index.vue", ""))) {
      console.log(`${item.path}--line38`);

      it.child.push({
        path: "/" + it.name + "/" + item.name,
        name: item.name,
        // example item.path : src/views/Vue/originEvent/index.vue

        // component: () => import(`@/${item.path.replace("src/", "")}`),//测试可行
        // component: () => import(`@/views${item.path.replace("src/views", "")}`),//测试可行
        // component: (resolve) => require([`@/${item.path.replace("src/", "")}`], resolve), //测试可行
        // component: () => import(`..${item.path.replace("src", "")}`), //哒咩！
        // component: (resolve) => require([`..${item.path.replace("src", "")}`], resolve), //哒咩！

        component: (resolve) =>
          require([`@/views${item.path.replace("src/views", "")}`], resolve),
      });
    }
  });
});

//生成路由规则
let generator = [];
levelI.forEach((item) => {
  generator.push({
    path: "/" + item.name,
    name: item.name,
    // component: () => import(`@/${item.path.replace("src/", "")}`),//测试可行
    // component: () => import(`@/views${item.path.replace("src/views", "")}`),//测试可行
    // component: (resolve) => require([`@/${item.path.replace("src/", "")}`], resolve), //测试可行
    // component: () => import(`..${item.path.replace("src", "")}`), //哒咩！
    // component: (resolve) =>require([`..${item.path.replace("src", "")}`], resolve), //哒咩！

    component: (resolve) =>
      require([`@/views${item.path.replace("src/views", "")}`], resolve),

    children: item.child,
  });
});
console.log(generator, "--line59");
//合并公共路由以及重定向规则
const routes = [
  {
    path: "/",
    redirect: "/Common/Index",
  },
  ...generator,
  {
    path: "*",
    component: () => import("@/components/Common/404.vue"),
  },
];

export default routes;
