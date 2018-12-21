$(function(){

  //初期化
  var calcStac = new Array();
  var displayString = "0";
  var displayDigitLetterArray = new Array();
  var nowOperator = "";

  //数字入力処理
  $(".numberButton").on("click", function(){

    displayDigitLetterArray.push($(this).val());
    displayString = GetDisplayString();
    $(".resultArea").val(displayString);
    
  });

  //演算子処理
  $(".calcButton").on("click", function(){

    //既に演算子を入力していたら処理を抜ける
    if(nowOperator != "") return false;

    calcStac.unshift(parseFloat(displayString));
    nowOperator = $(this).val();
    displayDigitLetterArray = [];
    displayString = nowOperator;
    $(".resultArea").val(displayString);

  });

  //計算処理
  $(".equalButton").on("click", function(){

    //演算子を入力していなかったら処理を抜ける
    if( nowOperator == "" || isNaN(parseFloat(displayString)) ) return false;

    calcStac.unshift(parseFloat(displayString));
    switch(nowOperator){
      case "＋":
        displayString = String(calcStac[1] + calcStac[0]);
        break;
      case "−":
        displayString = String(calcStac[1] - calcStac[0]);
        break;
      case "×":
        displayString = String(calcStac[1] * calcStac[0]);
        break;
      case "÷":
        displayString = String(calcStac[1] / calcStac[0]);
        break;
      default:
    }
    displayDigitLetterArray = [];
    $(".resultArea").val(displayString);
    nowOperator = "";

  });

  //クリア処理
  $(".clearButton").on("click", function(){

    calcStac = [];
    displayDigitLetterArray = [];
    displayString = 0;
    nowOperator = "";
    $(".resultArea").val(displayString);

  });

  //表示する文字列を取得する
  function GetDisplayString(){

    var displayString = "";
    for(var i = 0;i < displayDigitLetterArray.length;i++){

      var thisDisplayDigitLetter = displayDigitLetterArray[i];
      //先頭の0はdisplayDigistLetterArrayから削除する
      if( thisDisplayDigitLetter == "0" && i == 0 ){
        displayDigitLetterArray.pop();
        displayString = 0;
        break;
      }
      //先頭及び二個目以上の小数点はdisplayDigistLetterArrayから削除する
      if( thisDisplayDigitLetter == "." && (displayString.indexOf(".") != -1 || i == 0) ){
        displayDigitLetterArray.pop();
        break;
      }
      displayString += String(displayDigitLetterArray[i]);

    }
    return displayString;

  }

});
