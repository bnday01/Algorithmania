function fearNotLetter(str) {
  
  for  (var i = 0; i < str.length; i++){
    if (str.charCodeAt(i) !== str.charCodeAt(i +  1) - 1 && i < str.length - 1) {
     let result = String.fromCharCode(str.charCodeAt(i+1)-1);
    
    console.log(result);
     return result;
    }
      
  }
  console.log(undefined);
  return undefined;

}


fearNotLetter("abcdefghijklmnopqrstuvwxyz");

//a:97-z:122