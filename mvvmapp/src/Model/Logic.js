import axios from 'axios';

export default{
  datas : {
    name : "",
    recordClassList : [false,false,false,false,false],
    body : "",
    records : []
  },
  CallRegist : function( name, recordClassList, body ){
    //this.datas.records.push({"name" : name, "recordClassList" : Object.assign({},recordClassList), "body" : body});
    var data = this.datas;
    axios.get("http://localhost:3000/api/regist"
              + "/name/" + name
              + "/recordClassList/" + recordClassList
              + "/body/" + body)
         .then(function(res){
           alert(res.data + "aaa");
           data.name = res.data + "aaa";
         })
         .catch(function(error){
           alert(error);
         })
  },
  Test : function(){
    alert(this.datas.name);
  }
};
