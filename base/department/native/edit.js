export default {
  "detail": [{
    "field": "name",
    "text": "名称"
  }, {
    "field": "code",
    "text": "编码"
  }, {
    "field": "master",
    "text": "部门负责人"
  }, {
    "field": "pid",
    "type": "reference",
    "text": "上级部门"
  }, {
    "field": "enabled",
    "type": "boolean",
    "text": "启用",
    "tip": "停用部门不再提供选择，但是保留已有相关数据。"
  }, {
    "field": "note",
    "text": "备注"
  }]
}