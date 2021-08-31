//routes.js
//递归获取 views 文件夹下的所有.vue文件
const files = require.context("@/views", true, /\.vue$/);
let pages = [];
let initArr = [];
let initArrNoComps = [];
files.keys().forEach((key) => {
  // 首次处理，生成所有vue文件数组
  let initFilter = key.replace(/(\.\/|\.vue)/g, "").replace(" ", "");
  let path = files(key).default.__file;
  initArr.push({ name: initFilter, path: path });
});
initArr.forEach((item) => {
  if (item.name.includes("comps")) {
    initArrNoComps.push({ name: item.name, path: item.path });
  }
});
initArr.forEach((item, index) => {
  // 二次处理，过滤出二级tree结构
  if (item.name.includes("comps")) {
    let temp = item.name.split("/comps");
    try {
      let child = [];
      initArrNoComps.forEach((item) => {
        if (item.name.includes(temp[0])) {
          child.push({ name: temp[1], path: item.path });
        }
      });
      pages.push({ main: { name: temp[0], path: item.path }, child: child });
    } catch (err) {
      console.error("文件目录不规范,请检查文件目录结构,具体错误如下：");
      console.error(err);
    }
  } else {
    pages.push({ main: item, child: [] });
  }
});
console.log(pages, "--line38");
//生成路由规则
let generator = [];
pages.forEach((item) => {
  let path = main;
  let name = main.split("/")[main.split("/").length - 1];
  generator.push({
    path,
    name,
    component: pages[item],
  });
});
//合并公共路由以及重定向规则
const routes = [
  {
    path: "/",
    redirect: "/Common/Index",
  },
  ...generator,
  {
    path: "*",
    component: () => import("@/views/Common/404.vue"),
  },
];

export default routes;
