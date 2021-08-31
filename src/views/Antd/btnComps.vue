<!--
 * @Author: jayce
 * @Date: 2021-07-14 15:40:45
 * @LastEditTime: 2021-07-14 15:41:43
 * @Description: 
 * @FilePath: \demo-vue\src\views\Antd\btnComps.vue
 *  
-->
<template>
  <div>
    <a-button type="primary">
      Primary
    </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="danger">
      Danger
    </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary">
        按钮
      </a-button>
    </a-config-provider>
    <a-button type="primary">
      按钮
    </a-button>
    <a-button type="link">
      Link
    </a-button>
  </div>
</template>
