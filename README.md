# 这个示列使用了ant-design 组件库。
# FileReader 
  使用FileReader读取，使用ant-design导入的excel文件、
  在读取之前先使用onload方法监听下，读取完成的事件
  ## 读取方式有以下几种
     readAsArrayBuffer(file)：按字节读取文件内容，结果用ArrayBuffer对象表示
      readAsBinaryString(file)：按字节读取文件内容，结果为文件的二进制串
      readAsDataURL(file)：读取文件内容，结果用data:url的字符串形式表示
      readAsText(file,encoding)：按字符读取文件内容，结果用字符串形式表示
# XlSX 插件
  xlsx的read方法将excle 表格的数据拿出来
  然后使用XLSX.utils.sheet_to_json 方法将内容转换成键值对的形式。


