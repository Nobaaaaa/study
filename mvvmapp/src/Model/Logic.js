export default{
  datas : {
    name : "",
    recordClass : [false,false,false,false,false],
    body : "",
    records : []
  },
  regist : function( name, recordClass, body ){
    var recordClassValues = [];
    for(var i = 0;i < 5;i++){
      if(recordClass[i] == true){
        recordClassValues[i] = "◯";
        continue;
      }
      recordClassValues[i] = "×";
    }
    this.datas.records.push({"name" : name, "recordClass" : recordClassValues, "body" : body});
  }
}
