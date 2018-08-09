function sumPrimes(num) {
    
    let arr = [];
 //Get a range of numbers from 1 to num // returns arr
 function getRange(num){ 
   while(num > 1){
     arr.push(num);
     num--;
    } 
    return arr.reverse();
  }
  
  function isPrime(num){
    if (num === 1){
    return false;
  }
    for (var i = 2; i <= num; i++){
          if(num % i === 0 && num !== i){
             return false;
          }
       }
      return true;
  }
  
  getRange(num);
  
  let primes = arr.filter(function(val){
    return isPrime(val);
  });
  
  console.log(primes);
  let results = primes.reduce((a,b) => a + b);
  console.log(results);
  return results;


}

sumPrimes(50);