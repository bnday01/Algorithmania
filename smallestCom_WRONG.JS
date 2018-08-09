function smallestCommons(arr) {
  const newArr = arr.sort((a,b)=> a-b);

  function getRange(array){
    let range = [];
    for (var i = array[0]; i <= array[1]; i++){
      range.push(i);
    }
    return range;
  }
  
  let factor = getRange(newArr).reduce((a,b) => (a * b));

  function isFactor(array){
    let result;
    for (var i = 0; i < array.length; i++){
     result = factor % array[i] == 0;
     if (result === false){
       return false;
     }
    }     
    return result;
  }

  function factorLoop(statement){
    if (statement === true){
     factor = factor - 1;
     return factorLoop(isFactor(getRange(newArr)));
    }
    console.log(factor);
    return factor;    
  }
  
  console.log(getRange(newArr));
  console.log(factor);
  console.log(factorLoop(isFactor(getRange(newArr))));
}


smallestCommons([2,10]);