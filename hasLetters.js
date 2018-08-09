function mutation(arr) {
 let word = arr[0].split('');
 let str = arr[1];
 let newArr = [];
 let filter;
 let filter2;
 let arrStr = str.split('');

 for (var i = 0; i < word.length; i++){
   arrStr.map( function (letter){

      if (word[i] === letter){
        newArr.push(letter);
      }   
    });
   filter = newArr.filter((v,p) => newArr.indexOf(v) == p);
  } 

 filter2 = arrStr.filter((v,p) => arrStr.indexOf(v) == p);
 
 filter.sort();
 filter2.sort();

 let result = filter.join('');
 str = filter2.join('');
 
 console.log(result);
 console.log(str);
 if (result == str){
   console.log(true);
 }

 else{
  console.log(false);
}
  
}
mutation(["mary", "aarmy"]);

