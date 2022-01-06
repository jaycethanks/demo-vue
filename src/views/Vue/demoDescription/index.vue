<template>
  <div>
    <a-descriptions
      :column="3"
      size="small"
      title="User Info"
      layout="vertical"
    >
      <a-descriptions-item label="口径">
        <div
          class="div-item-in-description"
          v-for="(item, index) in list"
          :key="index"
        >
          {{ item.label }}
        </div>
      </a-descriptions-item>

      <a-descriptions-item label="VAT">
        <div
          class="div-item-in-description"
          v-for="(item, index) in list"
          :key="index"
        >
          <a-input
            v-model="item.vat"
            placeholder="Basic usage"
            style="width:80%"
          />
        </div>
      </a-descriptions-item>

      <a-descriptions-item label="单价">
        <div
          class="div-item-in-description"
          v-for="(item, index) in list"
          :key="index"
        >
          <a-input
            v-model="item.fee"
            placeholder="Basic usage"
            style="width:80%"
          />
        </div>
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: "口径10",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径15",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径20",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径25",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径30",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径35",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径40",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径45",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径50",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径55",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径60",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径65",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径70",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径75",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径80",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径85",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径90",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径95",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径100",
          vat: "231",
          fee: "524",
        },
        {
          label: "口径105",
          vat: "231",
          fee: "524",
        },
      ],
    };
  },
};
</script>
<style scoped>
.div-item-in-description {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  height: 35px;
}
>>> .ant-descriptions-item-content {
  width: 100%;
  /* margin: 0 2px; 去除spam空隙 */
}

>>> .ant-descriptions-item-content div {
  /* border: 1px solid red; */
  border-bottom: 1px solid #f5f5f5;
}

>>> .ant-descriptions-row {
  text-align: center;
}
</style>
