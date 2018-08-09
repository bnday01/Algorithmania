function chunkArrayInGroups(arr, size) {
  // Break it up.
 let newArr = [];
 let index = 0;
 let slice;
while (index < arr.length){
  slice = arr.slice(index, size + index);
  newArr.push(slice);
  index = size + index;
}



  console.log(newArr);
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);