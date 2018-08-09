function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];

  newArr.push(arr.map(function(obj){
  let T = Math.round((2*Math.PI)*(Math.sqrt(Math.pow((earthRadius + obj["avgAlt"]),3)/GM)));
  
  let result = {name: obj["name"], orbitalPeriod: T};
  return result;
  }));
  
  return newArr[0];
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);