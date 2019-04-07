<template src="../View/Top.html"></template>

<script>
import Logic from "../Model/Logic.js";

export default{
  data : function(){
    return {
      name : Logic.datas.name,
      recordClassList : Logic.datas.recordClassList,
      body : Logic.datas.body,
      displayRecords : Logic.datas.records
    }
  },
  methods : {
    regist : function(){
      Logic.CallRegist(this.name, this.recordClassList, this.body);
    },
    test : function(){
      Logic.Test();
    }
  }
}
</script>
