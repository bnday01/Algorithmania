function steamrollArray(arr) {
  // I'm a steamroller, baby
   let newArr = arr.toString().split(",").filter(Boolean).map(function(val){ 
     if (val == "[object Object]"){
       return {};
     }
     else if (isNaN(val)){
       return val;
     }
     else {
       return parseInt(val);
     }
   });
   
    
    console.log(newArr);
    return newArr;
} 

steamrollArray([1, {}, [3, [[4]]]]);