function destroyer(arr, ...args) {
  // Remove all the values
  let result;
  function argLoop(args){
    for (var i = 0; i < args.length; i++){
        result = arr.filter(num => num !== args[i]);
        arr = result;
      };
      console.log(result);
      return result;
  }

  return argLoop(args);
  
}  

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);