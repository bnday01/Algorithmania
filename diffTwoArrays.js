function diffArray(arr1, arr2) {
  var newArr = [];
// Same, same; but different.

  function getValues(arr1,arr2){
     var i = 0;
     while (arr1.length > i || arr2.length > i){
       if(arr1.includes(arr2[i]) === false){
         newArr.push(arr2[i]);
       }
       if (arr2.includes(arr1[i]) === false){
         newArr.push(arr1[i]);
       }
       i++;
     }
     console.log(newArr.filter(Boolean));
     return newArr.filter(Boolean);
  }
   
  getValues(arr1,arr2);
} 

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
