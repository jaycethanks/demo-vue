<!--
 * @Author: jayce
 * @Date: 2021-07-13 10:11:03
 * @LastEditTime: 2021-07-13 10:19:54
 * @Description: 
 * @FilePath: \demo-vue\src\views\k-form-design\index.vue
 *  
-->

<template>
  <div>
    <k-form-build
        :value="jsonData"
        ref="kfb"
        @submit="handleSubmit"
    />
    <button @click="getData">提交</button>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      jsonData: {
        "list": [{
          "type": "input",
          "label": "输入框",
          "options": {
            "type": "text",
            "width": "100%",
            "defaultValue": "",
            "placeholder": "请输入",
            "clearable": false,
            "maxLength": null,
            "addonBefore": "",
            "addonAfter": "",
            "hidden": false,
            "disabled": false
          },
          "model": "input_1626072680499",
          "key": "input_1626072680499",
          "help": "",
          "rules": [{"required": false, "message": "必填项"}]
        }, {
          "type": "switch",
          "label": "开关",
          "options": {"defaultValue": false, "hidden": false, "disabled": false},
          "model": "switch_1626067469592",
          "key": "switch_1626067469592",
          "help": "",
          "rules": [{"required": false, "message": "必填项"}]
        }, {
          "type": "input",
          "label": "输入框",
          "options": {
            "type": "text",
            "width": "100%",
            "defaultValue": "",
            "placeholder": "请输入",
            "clearable": false,
            "maxLength": null,
            "addonBefore": "",
            "addonAfter": "",
            "hidden": false,
            "disabled": false
          },
          "model": "input_1626067480326",
          "key": "input_1626067480326",
          "help": "",
          "rules": [{"required": false, "message": "必填项"}]
        }],
        "config": {
          "layout": "horizontal",
          "labelCol": {"xs": 4, "sm": 4, "md": 4, "lg": 4, "xl": 4, "xxl": 4},
          "labelWidth": 100,
          "labelLayout": "flex",
          "wrapperCol": {"xs": 18, "sm": 18, "md": 18, "lg": 18, "xl": 18, "xxl": 18},
          "hideRequiredMark": false,
          "customStyle": ""
        }
      },
      inputData: {
        "input_1626072680499": "ddddddd",
        "switch_1626067469592": true,
        "input_1626067480326": "aaaaaa"
      }
    }
  },
  methods: {
    handleSubmit(p) {
      // 通过表单提交按钮触发，获取promise对象
      p().then(res => {
        // 获取数据成功
        alert(JSON.stringify(res))
      })
          .catch(err => {
            console.log(err, "校验失败")
          })
    },
    getData() {
      // 通过函数获取数据
      this.$refs.kfb.form.setFieldsValue(this.inputData)
    }
  }
}
</script>