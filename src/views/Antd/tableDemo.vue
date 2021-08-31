<!--
 * @Author: jayce
 * @Date: 2021-07-14 17:47:12
 * @LastEditTime: 2021-07-14 17:54:11
 * @Description: 
 * @FilePath: \demo-vue\src\views\Antd\tableDemo.vue
 *  
-->
<template>
  <a-table :columns="columns" :pagination="false" :data-source="data" bordered></a-table>
</template>
<script>

const columns = [
  {
    title: 'realname',
    dataIndex: 'realname',
  },
  {
    title: 'rolename',
    dataIndex: 'rolename',
  },
  {
    title: 'username',
    dataIndex: 'username',
  },
];

const data = [
  {
    key: '1',
    realname: "郑乐进",
    rolename: "总经理",
    username: "raymond"
  },
  {
    key: '2',
    realname: "莱宸公司管理账号",
    rolename: "莱宸集团管理员",
    username: "laison_admin"
  },
  {
    key: '3',
    realname: "SuezAdmin",
    rolename: "Suez Company Admin",
    username: "SuezAdmin"
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
