<template src="../View/Top.html"></template>

<script>
import Logic from "../Model/Logic.js";

export default{
  data : function(){
    return {
      name : Logic.datas.name,
      recordClasses : Logic.datas.recordClasses,
      body : Logic.datas.body,
      records : Logic.datas.records
    }
  },
  methods : {
    regist : function(){
      Logic.regist(this.name, this.recordClasses, this.body);
    }
  }
}
</script>
