<template src="../View/Top.html"></template>

<script>
import Logic from "../Model/Logic.js";

export default{
  data : function(){
    return Logic.datas
  },
  methods : {
    regist : function(){
      Logic.regist(this.name, this.recordClasses, this.body);
    }
  }
}
</script>
