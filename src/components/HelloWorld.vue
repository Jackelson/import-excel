<template>
  <h3>EXCEL文件导入</h3>
  <a-upload
    :file-list="fileList"
    :before-upload="beforeUpload"
    @remove="handleRemove"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      Select File
    </a-button>
  </a-upload>
  <a-button
    type="primary"
    :disabled="fileList.length === 0"
    :loading="uploading"
    style="margin-top: 16px"
    @click="handleUpload"
  >
    {{ uploading ? "Uploading" : "Start Upload" }}
  </a-button>
</template>
<script setup>
import { ref } from "vue";
import * as XLSX from "xlsx";
const fileList = ref([]);
const uploading = ref(false);
const handleUpload = () => {
  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    let data = [];
    const { result } = event.target;
    // 以二进制流方式读取得到整份excel表格对象
    const workbook = XLSX.read(result, { type: "binary" });
    for (const sheet in workbook.Sheets) {
      console.log(sheet);
      if (Object.prototype.hasOwnProperty.call(workbook.Sheets, sheet)) {
        //这是关键的一步，hasOwnPropert要从Object的原型中调用
        // 利用 sheet_to_json 方法将 excel 转成 json 数据
        data = data.concat(
          XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
            head: 0,
            defval: " ",
          })
        );
        console.log(data);
      }
    }
  };
  fileReader.readAsBinaryString(fileList.value[0]);
};
const beforeUpload = (file) => {
  fileList.value = [...fileList.value, file];
  return false;
};
const handleRemove = () => {};
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
