<!--
 * @Author: jayce
 * @Date: 2021-07-14 13:53:37
 * @LastEditTime: 2021-07-16 09:35:13
 * @Description: 
 * @FilePath: \demo-vue\src\views\Antd\treeComps.vue
 *  
-->
<template>
  <a-modal v-model="visible" :title="modalTitle" :footer="null" width="50%">
    <a-input-search  style="margin-bottom: 8px" placeholder="Search" @change="onSearchChange" />
    <a-row>
      <a-col class="tree-nodes" :span="12">
        <a-directory-tree multiple :tree-data="treeData" :expanded-keys="expandedKeys" :auto-expand-parent="autoExpandParent" :selected-keys="selectedKeys" default-expand-all :replace-fields="replaceFields" @select="onSelect" @expand="onExpand">
          <a-tree-node key="0-0" title="parent 0">
            <a-tree-node key="0-0-0" title="leaf 0-0" is-leaf />
            <a-tree-node key="0-0-1" title="leaf 0-1" is-leaf />
          </a-tree-node>
          <a-tree-node key="0-1" title="parent 1">
            <a-tree-node key="0-1-0" title="leaf 1-0" is-leaf />
            <a-tree-node key="0-1-1" title="leaf 1-1" is-leaf />
          </a-tree-node>
        </a-directory-tree>
      </a-col>
      <a-col :span="12" class="member-list" style="padding-left:8px">
        <a-table :columns="columns" :pagination="false" :data-source="tableData" bordered></a-table>
      </a-col>
    </a-row>
  </a-modal>

</template>

<script>

const columns = [
  {
    title: 'realname',
    align: 'center',
    dataIndex: 'realname',
  },
  {
    title: 'rolename',
    align: 'center',
    dataIndex: 'rolename',
  },
  {
    title: 'username',
    align: 'center',
    dataIndex: 'username',
  },
];




let res = {
  "msg": "操作成功",
  "code": 0,
  "success": true,
  "structure": {
    "id": "0",
    "parentId": "-1",
    "name": "root",
    "sort": 99,
    "remarks": "这是根本部门",
    "type": 1,
    "state": 1,
    "level": 0,
    "address": "杭州",
    "members": [
      {
        "username": "admin",
        "realname": "管理员"
      }
    ],
    "subStructures": [
      {
        "id": "09d6943cc99e4779b01a0a00c98b60e2",
        "parentId": "0",
        "name": "泰安",
        "sort": 99,
        "remarks": "",
        "type": 1,
        "state": 1,
        "level": 1,
        "address": "",
        "members": [],
        "subStructures": [
          {
            "id": "c05e82470642406182a969b2f54c70cf",
            "parentId": "09d6943cc99e4779b01a0a00c98b60e2",
            "name": "XX学校",
            "sort": 99,
            "remarks": "学校的项目",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "",
            "members": [],
            "subStructures": [
              {
                "id": "067dc8f3f51d4ef2b4cef08d019299e5",
                "parentId": "c05e82470642406182a969b2f54c70cf",
                "name": "营业厅",
                "sort": 99,
                "remarks": "",
                "type": 8,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": []
              },
              {
                "id": "8ddaee4017a445abbec4bdce11a1c695",
                "parentId": "c05e82470642406182a969b2f54c70cf",
                "name": "维修部",
                "sort": 99,
                "remarks": "",
                "type": 32,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": []
              }
            ]
          }
        ]
      },
      {
        "id": "6aca892f2d174e6f8469db6ca5d6a840",
        "parentId": "0",
        "name": "中水总公司",
        "sort": 99,
        "remarks": "",
        "type": 1,
        "state": 1,
        "level": 1,
        "address": "龙游",
        "members": [
          {
            "username": "Test002",
            "realname": "jayce",
            "rolename": "1的公司管理员"
          },
          {
            "username": "zhongshui",
            "realname": "中水",
            "rolename": "中水管理员"
          },
          {
            "username": "1233434",
            "realname": "123",
            "rolename": "中水管理员"
          },
          {
            "username": "134",
            "realname": "24",
            "rolename": "中水管理员"
          }
        ],
        "subStructures": [
          {
            "id": "496f3f5ddd16463191d9c44c696f0309",
            "parentId": "6aca892f2d174e6f8469db6ca5d6a840",
            "name": "xx乡水务公司",
            "sort": 99,
            "remarks": "",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "xx乡",
            "members": [
              {
                "username": "lihuatest",
                "realname": "李华",
                "rolename": "中水分公司管理员"
              },
              {
                "username": "testtest",
                "realname": "testtest",
                "rolename": "sub manager"
              }
            ],
            "subStructures": [
              {
                "id": "30f7ff75aa5b4afeb242ebeae2a6c420",
                "parentId": "496f3f5ddd16463191d9c44c696f0309",
                "name": "营业厅a2",
                "sort": 99,
                "remarks": "",
                "type": 8,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "testadmin",
                    "realname": "testadmin",
                    "rolename": "营业厅管理员"
                  }
                ],
                "subStructures": []
              }
            ]
          }
        ]
      },
      {
        "id": "75b0084c16bf4e28ab74efa0f013a129",
        "parentId": "0",
        "name": "Suez",
        "sort": 99,
        "remarks": "Egypt",
        "type": 1,
        "state": 1,
        "level": 1,
        "address": "Egypt",
        "members": [
          {
            "username": "SuezAdmin",
            "realname": "SuezAdmin",
            "rolename": "Suez Company Admin"
          }
        ],
        "subStructures": [
          {
            "id": "27702154fc1f479ca8a3c70bb47564ad",
            "parentId": "75b0084c16bf4e28ab74efa0f013a129",
            "name": "Suez Commpany",
            "sort": 99,
            "remarks": "noted",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "",
            "members": [
              {
                "username": "Ahmed",
                "realname": "Ahmed",
                "rolename": "SuezSubCompanyAdmin"
              },
              {
                "username": "ahmed 1",
                "realname": "ahmed 1",
                "rolename": "SuezSubCompanyAdmin"
              }
            ],
            "subStructures": [
              {
                "id": "149f64bfac684a20a0f3279325a50150",
                "parentId": "27702154fc1f479ca8a3c70bb47564ad",
                "name": "Station1",
                "sort": 99,
                "remarks": "noded",
                "type": 8,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "Tom",
                    "realname": "Tom",
                    "rolename": "station Admin"
                  },
                  {
                    "username": "Test001",
                    "realname": "jayce",
                    "rolename": "stationoperator"
                  }
                ],
                "subStructures": []
              }
            ]
          },
          {
            "id": "68417ced321243888e71d0352a5ae8c8",
            "parentId": "75b0084c16bf4e28ab74efa0f013a129",
            "name": "Station 2",
            "sort": 99,
            "remarks": "Noted",
            "type": 4,
            "state": 1,
            "level": 2,
            "address": "",
            "members": [],
            "subStructures": []
          },
          {
            "id": "7b60a1388e444588a049fc183d5ad75e",
            "parentId": "75b0084c16bf4e28ab74efa0f013a129",
            "name": "Suez SubCompany",
            "sort": 99,
            "remarks": "",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "",
            "members": [
              {
                "username": "34433",
                "realname": "234",
                "rolename": "sub manager"
              },
              {
                "username": "123",
                "realname": "123",
                "rolename": "sub manager"
              },
              {
                "username": "SuezSubAdmin",
                "realname": "Peter",
                "rolename": "SuezSubCompanyAdmin"
              }
            ],
            "subStructures": [
              {
                "id": "2e1217f9c2a0418fa0c739ddfeef0663",
                "parentId": "7b60a1388e444588a049fc183d5ad75e",
                "name": "maint",
                "sort": 99,
                "remarks": "",
                "type": 32,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "lh",
                    "realname": "李华",
                    "rolename": "维修管理员"
                  },
                  {
                    "username": "songdp",
                    "realname": "宋东盼",
                    "rolename": "维修员"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "52b3b3c571304416af734cb9bc209afe",
                "parentId": "7b60a1388e444588a049fc183d5ad75e",
                "name": "station b",
                "sort": 99,
                "remarks": "",
                "type": 8,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": [
                  {
                    "id": "28d2dc37c5914f41b0fec7ddd6f0f706",
                    "parentId": "52b3b3c571304416af734cb9bc209afe",
                    "name": "2",
                    "sort": 99,
                    "remarks": "",
                    "type": 1048576,
                    "state": 1,
                    "level": 4,
                    "address": "",
                    "members": [],
                    "subStructures": [
                      {
                        "id": "dbcf4b4173244c029c04fefe2eeeb5ee",
                        "parentId": "28d2dc37c5914f41b0fec7ddd6f0f706",
                        "name": "3",
                        "sort": 99,
                        "remarks": "",
                        "type": 1048576,
                        "state": 1,
                        "level": 5,
                        "address": "",
                        "members": [],
                        "subStructures": []
                      }
                    ]
                  }
                ]
              },
              {
                "id": "68afe920caee465ba97f50b84c70e296",
                "parentId": "7b60a1388e444588a049fc183d5ad75e",
                "name": "station a",
                "sort": 99,
                "remarks": "",
                "type": 8,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "lihua1",
                    "realname": "lihua",
                    "rolename": "stationoperator"
                  },
                  {
                    "username": "station admin",
                    "realname": "peter",
                    "rolename": "station  admin"
                  },
                  {
                    "username": "test1",
                    "realname": "ttt",
                    "rolename": "stationoperator"
                  },
                  {
                    "username": "op1",
                    "realname": "xxxx",
                    "rolename": "stationoperator"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "984d6a504b7742d4b4c65a8c48037ac8",
                "parentId": "7b60a1388e444588a049fc183d5ad75e",
                "name": "order",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "panda",
                    "realname": "sdp",
                    "rolename": "order repair"
                  },
                  {
                    "username": "ljq",
                    "realname": "维修员",
                    "rolename": "order repair"
                  },
                  {
                    "username": "jaxsong",
                    "realname": "宋 jax",
                    "rolename": "order manager"
                  },
                  {
                    "username": "pandasong",
                    "realname": "宋管理员",
                    "rolename": "order manager"
                  },
                  {
                    "username": "hyy",
                    "realname": "侯 录入员",
                    "rolename": "order input"
                  },
                  {
                    "username": "hongzhe",
                    "realname": "洪喆",
                    "rolename": "order finance"
                  },
                  {
                    "username": "yytinputer",
                    "realname": "录入员",
                    "rolename": "order input"
                  }
                ],
                "subStructures": []
              }
            ]
          },
          {
            "id": "89c497af0c2140f2b7ef73c9692aff19",
            "parentId": "75b0084c16bf4e28ab74efa0f013a129",
            "name": "Suez Company 1",
            "sort": 99,
            "remarks": "Noted 1",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "",
            "members": [
              {
                "username": "احمد ",
                "realname": "احمد ",
                "rolename": "SuezSubCompanyAdmin"
              }
            ],
            "subStructures": []
          }
        ]
      },
      {
        "id": "783f09ad7348421a978c7edefc58b89d",
        "parentId": "0",
        "name": "1",
        "sort": 99,
        "remarks": "",
        "type": 1,
        "state": 1,
        "level": 1,
        "address": "",
        "members": [
          {
            "username": "jay",
            "realname": " zhennjanf",
            "rolename": "1的公司管理员"
          },
          {
            "username": "jayce",
            "realname": "sunzhongyi",
            "rolename": "中水管理员"
          }
        ],
        "subStructures": [
          {
            "id": "27abc37b6b8a4b5ab755b4d2e717087c",
            "parentId": "783f09ad7348421a978c7edefc58b89d",
            "name": "4",
            "sort": 99,
            "remarks": "",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "",
            "members": [],
            "subStructures": []
          },
          {
            "id": "ba55deca23f849418e94ed8e1a00430e",
            "parentId": "783f09ad7348421a978c7edefc58b89d",
            "name": "2",
            "sort": 99,
            "remarks": "234",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "",
            "members": [],
            "subStructures": [
              {
                "id": "4edab2010ff94979a04c77e520e346ad",
                "parentId": "ba55deca23f849418e94ed8e1a00430e",
                "name": "3",
                "sort": 99,
                "remarks": "444",
                "type": 8,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": [
                  {
                    "id": "33a6e0df3cd541cf91c7ddad1ba97ec2",
                    "parentId": "4edab2010ff94979a04c77e520e346ad",
                    "name": "44",
                    "sort": 99,
                    "remarks": "",
                    "type": 1048576,
                    "state": 1,
                    "level": 4,
                    "address": "",
                    "members": [],
                    "subStructures": []
                  },
                  {
                    "id": "45ca8bccf15e42fcb0673649c1412654",
                    "parentId": "4edab2010ff94979a04c77e520e346ad",
                    "name": "44",
                    "sort": 99,
                    "remarks": "",
                    "type": 1048576,
                    "state": 1,
                    "level": 4,
                    "address": "",
                    "members": [],
                    "subStructures": [
                      {
                        "id": "1ced9d9efe8d482fa68d823b9d4da9df",
                        "parentId": "45ca8bccf15e42fcb0673649c1412654",
                        "name": "434",
                        "sort": 99,
                        "remarks": "4343434",
                        "type": 1048576,
                        "state": 1,
                        "level": 5,
                        "address": "",
                        "members": [],
                        "subStructures": []
                      },
                      {
                        "id": "1ea0230200b745d5808bb8074659f57c",
                        "parentId": "45ca8bccf15e42fcb0673649c1412654",
                        "name": "434",
                        "sort": 99,
                        "remarks": "4343434",
                        "type": 1048576,
                        "state": 1,
                        "level": 5,
                        "address": "",
                        "members": [],
                        "subStructures": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "885d3f564d434f0192ad914a0532a574",
        "parentId": "0",
        "name": "莱宸集团(这里有我们公司完整的组织结构)",
        "sort": 99,
        "remarks": "",
        "type": 1,
        "state": 1,
        "level": 1,
        "address": "",
        "members": [
          {
            "username": "laison_admin",
            "realname": "莱宸公司管理账号",
            "rolename": "莱宸集团管理员"
          }
        ],
        "subStructures": [
          {
            "id": "84e034c118c14cb587e542d1624c1d4e",
            "parentId": "885d3f564d434f0192ad914a0532a574",
            "name": "杭州莱宸科技有限公司",
            "sort": 99,
            "remarks": "",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "",
            "members": [
              {
                "username": "raymond",
                "realname": "郑乐进",
                "rolename": "总经理"
              },
              {
                "username": "laison_hr",
                "realname": "莱宸人力专用账户",
                "rolename": "莱宸Hr"
              }
            ],
            "subStructures": [
              {
                "id": "275c509ff49249bf93a4ec985fec8db3",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "莱宸维修部",
                "sort": 99,
                "remarks": "",
                "type": 32,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": []
              },
              {
                "id": "2bac8ccc7cf64e1b982b53ace3f48313",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "海外销售部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "daizl",
                    "realname": "戴宗亮",
                    "rolename": "海外销售总监"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "407b495322ee47988bbe4c2048d90051",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "采购部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "xiaoh",
                    "realname": "肖辉",
                    "rolename": "采购经理"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "647433aa3979406e934d9b673e6c47d0",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "西湖营业厅",
                "sort": 99,
                "remarks": "",
                "type": 8,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": []
              },
              {
                "id": "65be31f67c754197a432dd262160373e",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "表计研发部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "wude",
                    "realname": "吴德",
                    "rolename": "表计研发部经理"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "7d7fd48a28824e3091a30f77576f8dd6",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "国内销售部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "yangl",
                    "realname": "杨磊",
                    "rolename": "国内营销总监"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "86142efd8553491eab1cdbfae7db62e0",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "软件研发部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "zhengjf",
                    "realname": "郑剑锋",
                    "rolename": "软件部经理"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "86afb064f93f424c9280d866f0799d42",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "财务部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "chengyq",
                    "realname": "程云琴",
                    "rolename": "财务经理"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "8854afede6aa4df181df0a4cc7ddcb94",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "上城营业厅",
                "sort": 99,
                "remarks": "",
                "type": 8,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": []
              },
              {
                "id": "a89fdf67862c47698dfcc227c665f3ed",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "品质管理部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": []
              },
              {
                "id": "b6e0a2f92fd64178968431988e65d441",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "行政部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "hongz",
                    "realname": "洪喆",
                    "rolename": "行政经理"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "c0fbedee9baf467aa676d312244eac3f",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "生产部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "wangbj",
                    "realname": "王兵剑",
                    "rolename": "生产部经理"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "cc4eca02fe934a99b9c049c28522773d",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "人力资源部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "zhangm",
                    "realname": "张敏",
                    "rolename": "人力资源总监"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "de9b53228b014d479207df98607f9995",
                "parentId": "84e034c118c14cb587e542d1624c1d4e",
                "name": "市场部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "fengjq",
                    "realname": "冯佳青",
                    "rolename": "市场经理"
                  }
                ],
                "subStructures": []
              }
            ]
          }
        ]
      },
      {
        "id": "a3ac879f4813477fbac81abaf542f26a",
        "parentId": "0",
        "name": "莱宸科技",
        "sort": 99,
        "remarks": "杭州莱宸",
        "type": 1,
        "state": 1,
        "level": 1,
        "address": "浙江杭州",
        "members": [
          {
            "username": "jax",
            "realname": "jax-管理员",
            "rolename": "莱宸管理员"
          },
          {
            "username": "lihua",
            "realname": "李华",
            "rolename": "莱宸管理员"
          }
        ],
        "subStructures": [
          {
            "id": "0aa72614faf745a98faf39df8f85d95c",
            "parentId": "a3ac879f4813477fbac81abaf542f26a",
            "name": "24",
            "sort": 99,
            "remarks": "24",
            "type": 4,
            "state": 1,
            "level": 2,
            "address": "234",
            "members": [],
            "subStructures": []
          },
          {
            "id": "0bad2abf050a43138955f80692e22211",
            "parentId": "a3ac879f4813477fbac81abaf542f26a",
            "name": "总经办",
            "sort": 99,
            "remarks": "流程组专用",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "",
            "members": [],
            "subStructures": [
              {
                "id": "0219e7bf6178469dbacfd7b495f5fb66",
                "parentId": "0bad2abf050a43138955f80692e22211",
                "name": "人力资源",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "zm",
                    "realname": "张敏",
                    "rolename": "流程审批员"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "0537b49acd604adcac2dc195421f2737",
                "parentId": "0bad2abf050a43138955f80692e22211",
                "name": "采购部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": []
              },
              {
                "id": "1ee8999fc5f6466695cb998f1269fb79",
                "parentId": "0bad2abf050a43138955f80692e22211",
                "name": "表计研发部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": []
              },
              {
                "id": "3c56fc4710d4481da9b097b32e85b0ab",
                "parentId": "0bad2abf050a43138955f80692e22211",
                "name": "品质管理部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "yyt",
                    "realname": "营业厅",
                    "rolename": "流程录入员"
                  },
                  {
                    "username": "wxy",
                    "realname": "维修员",
                    "rolename": "流程维修员"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "49fd5066f9ac4da8ba1ca03090f51e5d",
                "parentId": "0bad2abf050a43138955f80692e22211",
                "name": "行政部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "zlj",
                    "realname": "郑乐进",
                    "rolename": "流程管理员"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "66285375c723446389b2d02cfeb2f555",
                "parentId": "0bad2abf050a43138955f80692e22211",
                "name": "财务部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "hz",
                    "realname": "洪喆",
                    "rolename": "流程审批员"
                  }
                ],
                "subStructures": []
              },
              {
                "id": "6bc2cf273f2d4ca18e10afa9d5906d75",
                "parentId": "0bad2abf050a43138955f80692e22211",
                "name": "市场部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": []
              },
              {
                "id": "7d0c1e4a31df4369a60ed80418e882be",
                "parentId": "0bad2abf050a43138955f80692e22211",
                "name": "生产部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": []
              },
              {
                "id": "adcfd69ad039418f91ab42f38e09e51e",
                "parentId": "0bad2abf050a43138955f80692e22211",
                "name": "销售部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [],
                "subStructures": [
                  {
                    "id": "25cbfa741ed64ad0bf357d4c6d11b54f",
                    "parentId": "adcfd69ad039418f91ab42f38e09e51e",
                    "name": "国内销售部",
                    "sort": 99,
                    "remarks": "",
                    "type": 1048576,
                    "state": 1,
                    "level": 4,
                    "address": "",
                    "members": [],
                    "subStructures": []
                  },
                  {
                    "id": "94306c55cf2e4b0b810412cc51fc54ec",
                    "parentId": "adcfd69ad039418f91ab42f38e09e51e",
                    "name": "海外销售部",
                    "sort": 99,
                    "remarks": "",
                    "type": 1048576,
                    "state": 1,
                    "level": 4,
                    "address": "",
                    "members": [],
                    "subStructures": []
                  }
                ]
              },
              {
                "id": "f4d8f152ddcd4f49a031ba27bcdfaebd",
                "parentId": "0bad2abf050a43138955f80692e22211",
                "name": "软件研发部",
                "sort": 99,
                "remarks": "",
                "type": 1048576,
                "state": 1,
                "level": 3,
                "address": "",
                "members": [
                  {
                    "username": "sdp",
                    "realname": "宋东盼",
                    "rolename": "流程普通人员"
                  },
                  {
                    "username": "zjf",
                    "realname": "郑剑锋",
                    "rolename": "流程审批员"
                  }
                ],
                "subStructures": []
              }
            ]
          },
          {
            "id": "5ab7b6c366694193a2e5dee69242e0d1",
            "parentId": "a3ac879f4813477fbac81abaf542f26a",
            "name": "324",
            "sort": 99,
            "remarks": "234",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "234",
            "members": [],
            "subStructures": []
          },
          {
            "id": "ab721d2ae057415286c37d7de35c9e0e",
            "parentId": "a3ac879f4813477fbac81abaf542f26a",
            "name": "第三方",
            "sort": 99,
            "remarks": "这个部门用了保存第三方接入对应的账号",
            "type": 4,
            "state": 1,
            "level": 2,
            "address": "第三方",
            "members": [],
            "subStructures": []
          },
          {
            "id": "d70c736a14b24eb1a069ae396006a92e",
            "parentId": "a3ac879f4813477fbac81abaf542f26a",
            "name": "杭州分公司",
            "sort": 99,
            "remarks": "这是杭州的分公司 ",
            "type": 2,
            "state": 1,
            "level": 2,
            "address": "古荡科技园",
            "members": [],
            "subStructures": [
              {
                "id": "4f32d87728324bda92565c4dab1f4966",
                "parentId": "d70c736a14b24eb1a069ae396006a92e",
                "name": "杭州代理",
                "sort": 99,
                "remarks": "这是杭州分公司的代理",
                "type": 16,
                "state": 1,
                "level": 3,
                "address": "杭州xx大厦",
                "members": [],
                "subStructures": [
                  {
                    "id": "969f0e5e33314808a0a5eb7dd78a4454",
                    "parentId": "4f32d87728324bda92565c4dab1f4966",
                    "name": "1",
                    "sort": 99,
                    "remarks": "1",
                    "type": 1048576,
                    "state": 1,
                    "level": 4,
                    "address": "1",
                    "members": [],
                    "subStructures": []
                  }
                ]
              },
              {
                "id": "d71fa4bc21a343418533877af41e9803",
                "parentId": "d70c736a14b24eb1a069ae396006a92e",
                "name": "西湖营业厅",
                "sort": 99,
                "remarks": "",
                "type": 8,
                "state": 1,
                "level": 3,
                "address": "西湖古荡",
                "members": [],
                "subStructures": []
              }
            ]
          }
        ]
      }
    ]
  },
  "timestamp": 1626251386120
}
export default {
  props:{
    modalTitle:{
      type:String,
      default:'组织架构'
    }
  },
  data() {
    return {
      //modal
      visible: true,
      //table
      tableData: [],
      columns,
      //tree
      treeData: [],
      expandedKeys: [],
      selectedKeys: [],
      autoExpandParent: true,
      replaceFields: {
        children: 'subStructures',
        title: 'name',
        key: 'id'
      },
    }
  },
  created() {
    //树数据初始化
    this.treeData.push(res.structure);
  },
  methods: {
    onSelect(keys, event) {
      this.toggleExpandTree(keys[0]);
      let _this = this;
      var treeTraverse = function (node) {
        //树的递龟遍历，找到点击项所在tree层级，获取members属性（value为数组）
        if (!node) { return; }
        node.forEach((item, index) => {
          if (keys[0] == item.id) {
            _this.mapMemberlist(item.members);
          }
          if (!item.subStructures) return;
          treeTraverse(item.subStructures);
        })
      }
      treeTraverse(this.treeData);
    },

    mapMemberlist(memberlist) {
      this.tableData = [];//初始化
      //对members进行二次数据处理，以用于视图的正常显示
      if (!memberlist.length) return;
      let arr = memberlist.map((_item, _index) => {
        let temp = {};
        temp = {
          key: _index,
          realname: _item.realname ? _item.realname : ' - ',
          rolename: _item.rolename ? _item.rolename : ' - ',
          username: _item.username ? _item.username : ' - '
        };
        return temp;

      })
      this.tableData = arr;
    },
    onExpand(keys, event) {

    },
    toggleExpandTree(key) {
      // console.log(key,'--line1291');
      // console.log(this.expandedKeys,'--line1292');
      if (this.expandedKeys.indexOf(key) == -1) {
        this.expandedKeys.push(key);
        this.$set(this, "expandedKeys", this.expandedKeys)
        // this.selectedKeys.push(key);
      } else {
        this.expandedKeys.splice(this.expandedKeys.indexOf(key), 1);

        this.$set(this, "expandedKeys", this.expandedKeys)
        //this.selectedKeys.splice(this.expandedKeys.indexOf(key), 1);
      }

    },
    onSearchChange(e) {
      // 搜索handler
      let _this = this;
      _this.expandedKeys = [];
      _this.selectedKeys = [];
      const value = e.target.value.trim();
      var treeTraverse = function (node) {
        //树的递龟遍历，找到点击项所在tree层级，获取members属性（value为数组）
        if (!node) { return; }
        node.forEach((item, index) => {
          item.members.forEach((_item, _index) => {
            for (let i in _item) {
              if (_item[i].includes(value)) {
                _this.expandedKeys.push(item.id);
                _this.selectedKeys.push(item.id)
              }
            }
          })
          if (!item.subStructures) return;
          treeTraverse(item.subStructures);
        })
      }
      treeTraverse(this.treeData);
      this.tableData = [];//初始化table


      // 解决输入空格，然后删除搜索字符，大量选中的问题。 
      if (!value) {
        console.log("输入空白清理掉", '--line1320');
        _this.expandedKeys = [];
        _this.selectedKeys = [];
      }


    }

  }
};
</script>
<style>
.member-list {
  position: sticky;
  top: 20px;
}
.tree-nodes {
  border-right: 1px solid #efefef;
}
.member-list-wrap {
}
</style>
