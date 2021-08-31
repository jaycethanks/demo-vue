import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/child_father_child",
    name: "ChildFatherChild",
    component: () => import("../views/ChildFatherChild/index.vue"),
  },
  {
    path: "/demoprops",
    name: "demoprops",

    component: () => import("../views/Props/index.vue"),
  },
  {
    path: "/codemirror",
    name: "codemirror",

    component: () => import("../views/TestCodemirror/index.vue"),
  },
  {
    path: "/kFormDesign",
    name: "kFormDesign",

    component: () => import("../views/KFormDesign/index.vue"),
  },
  {
    path: "/antd",
    name: "antdDemo",

    component: () => import("../views/Antd/index.vue"),
    children: [
      {
        path: "treeComps",
        name: "treeComps",
        component: () => import("../views/Antd/treeComps"),
      },
      {
        path: "btnComps",
        name: "btnComps",
        component: () => import("../views/Antd/btnComps"),
      },
      {
        path: "searchTreeDemo",
        name: "searchTreeDemo",
        component: () => import("../views/Antd/searchTreeDemo"),
      },
      {
        path: "tableDemo",
        name: "tableDemo",
        component: () => import("../views/Antd/tableDemo"),
      },
      {
        path: "",
        name: "aSelect",
        component: () => import("../views/Antd/aSelect"),
      },
      {
        path: "aSpin",
        name: "aSpin",
        component: () => import("../views/Antd/aSpin"),
      },
    ],
  },
  {
    path: "/vueDemo",
    name: "vueDemo",
    component: () => import("../views/Vue/index.vue"),
    children: [
      {
        path: "vModel",
        name: "vModel",
        component: () => import("../views/Vue/vModel"),
      },
      {
        path: "lifeCycle",
        name: "lifeCycle",
        component: () => import("../views/Vue/lifeCycle/index.vue"),
      },
      {
        path: "lifeCycle2",
        name: "lifeCycle2",
        component: () => import("../views/Vue/lifeCycle2/index.vue"),
      },
      {
        path: "customEvent",
        name: "customEvent",
        component: () => import("../views/Vue/customEvent/index.vue"),
      },
      {
        path: "cusVModel",
        name: "cusVModel",
        component: () => import("../views/Vue/cusVModel/index.vue"),
      },
      {
        path: "cusVModelcheckBox",
        name: "cusVModelcheckBox",
        component: () => import("../views/Vue/cusVModelcheckBox/index.vue"),
      },
      {
        path: "cusVModelPractice",
        name: "cusVModelPractice",
        component: () => import("../views/Vue/cusVModelPractice/index.vue"),
      },
      {
        path: "originEvent",
        name: "originEvent",
        component: () => import("../views/Vue/originEvent/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
