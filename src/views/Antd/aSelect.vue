<!--
 * @Author: jayce
 * @Date: 2021-07-19 09:03:08
 * @LastEditTime: 2021-07-20 09:28:45
 * @Description: 
 * @FilePath: \demo-vue\src\views\Antd\aSelect.vue
 *  
-->
<template>
  <div>
    <table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 728px;font-family:'fangsong','Times New Roman'" class="tg">
      <colgroup>
        <col style="width: 81px">
        <col style="width: 81px">
        <col style="width: 80px">
        <col style="width: 81px">
        <col style="width: 81px">
        <col style="width: 81px">
        <col style="width: 81px">
        <col style="width: 81px">
        <col style="width: 81px">
      </colgroup>
      <thead>
        <tr>
          <th colspan="9">
            <div>
              <p style="margin-bottom:-15px;font-size:24px;text-align:center">南京螃蟹市场水费充值单</p>
              <p style="margin-bottom:5px;font-size:20px;font-weight:normal;font-family:sans-serif,'Times New Roman';text-align:right">No <span style="color:red">00000000</span></p>
              <p style="margin-bottom:5px;font-size:16px;font-weight:normal;text-align:right">开单日期0000年00月00日</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">户号</td>
          <td colspan="2" style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">测试户号</td>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">户名</td>
          <td colspan="2" style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">测试户名</td>
          <td style="border-color:black;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">表号</td>
          <td colspan="2" style="border-color:black;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">测试表号</td>
        </tr>
        <tr>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">电话</td>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="2">测试电话</td>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">地址</td>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="5">测试地址</td>
        </tr>
        <tr>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">阶梯</td>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="2">购水量</td>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="2">单价</td>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="2">其他费用</td>
          <td style="border-color:black;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="2">总金额</td>
        </tr>
        <tr>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">a</td>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="2">b</td>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="2">c</td>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="2">d</td>
          <td style="border-color:black;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal" colspan="2">e</td>
        </tr>
        <tr>
          <td style="border-color:inherit;border-style:solid;border-width:1px;font-size:16px;;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="9">合计金额（大写）：测试金额</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [1, 2, 3, 4]
    }
  }
}
</script>