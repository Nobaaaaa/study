module.exports = {
  Save : function(name, recordClassList, body){
    var fs = require("fs");
    var path = "Data/data.json";
    var data = {
      name : name,
      recordClassList : recordClassList,
      body : body
    };
    fs.appendFile(path, JSON.stringify(data) + "\n", function(error, result){
      if(error) return false;
    });
    return true;
  }
};
