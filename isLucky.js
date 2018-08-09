function isLucky(n) {
  var str = n.toString();
  var sum1 = '';
  var sum2 = '';
  if (str.length % 2 === 0) {
    var arr = str.split('');

    firstHalf = arr.slice(0, arr.length / 2);
    secondHalf = arr.slice(arr.length / 2, arr.length);

    sum1 = firstHalf.reduce(function (previousVal, currentVal) {
      return parseInt(previousVal) + parseInt(currentVal);
    });
    sum2 = secondHalf.reduce(function (previousVal, currentVal) {
      return parseInt(previousVal) + parseInt(currentVal);
    });

  
    return sum1 == sum2;
  } else {
    console.log('This number does not have an even number of digits.');
  }
}

isLucky(1234554321);
