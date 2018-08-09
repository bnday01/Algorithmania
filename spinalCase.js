function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  let newArr = [];
 
 function addSpace(str){
   let arr = str.split('');
   for (var i = 0; i < arr.length; i++){
     if (arr[i] == arr[i].toUpperCase() && arr[i] !== ' '){
       newArr.push(" ");
     }
     newArr.push(arr[i]);
   }
   return newArr.join('').toLowerCase().split(' ').filter(Boolean).join(' ');
 }
 
  return addSpace(str).split(/[\W_]+/).join('-');
  // --David St. Hubbins
  
}

spinalCase("AllThe-small Things");