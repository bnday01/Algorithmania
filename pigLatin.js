function translatePigLatin(str) {
 let copy = str;
 let arr = copy.split('');
 if (str.toLowerCase().match(/^[aeiou]/)){
    
    console.log(str + "way");
    return str + "way";
 }
 else {
   if(copy[2].match(/[aeiou]/)){
     let firstLetter = arr[0] + arr[1];
     arr.splice(0,2);
    
     console.log(arr.join('') + firstLetter + "ay");
     return arr.join('') + firstLetter + "ay";
   }

   else if(copy[0] + copy[1] + copy[2] == "str"){
     let firstLetter = "str";
     arr.splice(0,3);

     console.log(arr.join('') + firstLetter + "ay");
     return arr.join('') + firstLetter + "ay";
    }

   else {
     let firstLetter = arr[0];
     arr.shift(1,0);
     
     console.log(arr.join('') + firstLetter + "ay");
     return arr.join('') + firstLetter + "ay";
    }

  }  
 console.log();
  return str;
}

//works in theory but doesnt pass FCC test
translatePigLatin("Grsatra");

// can use else { return str.replace(/([^aeiou]+)([aeiou]\w*)*/, "$2$1ay");} instead;  