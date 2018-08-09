function convertToRoman(num) {
  let str = num.toString();
  let arr = [];

  //Loop through new string
  for(var i = 0; i < str.length;i++){
    let numID = str.length;
  //Take str[i] and add "0" repeatedly until the string length is 0;
     var leadNum = str[i];   
     function addZero(leadNum){
       if(leadNum.length < numID - i ){
         leadNum += "0";
         addZero(leadNum);
       }
       else{
          arr.push(leadNum);
       }
      }
     addZero(leadNum);
  }

 let newStr = "";

 //Push Roman Numerals into a string
 let result = arr.map(val => {
    parseInt(val);
    console.log(val);
     addLetters(val);

    function addLetters(val){
      if (val >= 1000){
       newStr += "M";
       val = val - 1000;
       return addLetters(val);
      }
       if (val == 900) {newStr += "CM";}
       if (val == 800) {newStr += "DCCC";}
       if (val == 700) {newStr += "DCC";}
       if (val == 600) {newStr += "DC";}
       if (val == 500) {newStr += "D";}
       if (val == 400) {newStr += "CD";}
       if (val == 300) {newStr += "CCD";}
       if (val == 200) {newStr += "CC";}
       if (val == 100) {newStr += "C";}
       if (val == 90) {newStr += "XC";}
       if (val == 80) {newStr += "LXXX";}
       if (val == 70) {newStr += "LXX";}
       if (val == 60) {newStr += "LX"; }
       if (val == 50) {newStr += "L"; }
       if (val == 40) {newStr += "XL"; }
       if (val == 30) {newStr += "XXX";}
       if (val == 20) {newStr += "XX"; }
       if (val == 10) {newStr += "X"; }
       if (val == 9) {newStr += "IX"; }
       if (val == 8) {newStr += "VIII"; }
       if (val == 7) {newStr += "VII"; }
       if (val == 6) {newStr += "VI"; }
       if (val == 5) {newStr += "V"; }
       if (val == 4) {newStr += "IV"; }
       if (val == 3) {newStr += "III"; }
       if (val == 2) {newStr += "II"; }
       if (val == 1) {newStr += "I"; }
    }

 });

   console.log(newStr);
   return newStr;
}

convertToRoman(674);