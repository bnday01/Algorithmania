function sumFibs(num) {
  
let arr = [1,1];
var i = 1;
let result = [];

// Raw Fibonacci Sequence
while (arr[arr.length - 1] < num){
  arr.push(arr[i] + arr[i-1]);
  i++;
}
//Filter numbers larger than num and even numbers
 let newArr = arr.filter(val => val <= num && val % 2 !== 0);

//Add values of odd numbers less than num
 result = newArr.reduce((a,b) => a+b);

  console.log(newArr);
  return result;
}

sumFibs(10);