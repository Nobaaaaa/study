export default{
  datas : {
    name : "",
    recordClasses : [false,false,false,false,false],
    body : "",
    records : []
  },
  regist : function( name, recordClasses, body ){
    var recordClassesValues = [];
    for(var i = 0;i < 5;i++){
      if(recordClasses[i] == true){
        recordClassesValues[i] = "◯";
        continue;
      }
      recordClassesValues[i] = "×";
    }
    this.datas.records.push({"name" : name, "recordClasses" : recordClassesValues, "body" : body});
  }
}
