//Return DNA Sequences in Pairs G <=> C and A <=> T

function pairElement(str) {
  
  let arr = str.split('');
  let newArr = [];
  for (var i = 0; i < arr.length; i++){
   
    switch (arr[i]){
      case "G": newArr.push(["G","C"]);
      break;
      case "C": newArr.push(["C","G"]);
      break;
      case "A": newArr.push(["A","T"]);
      break;
      case "T": newArr.push(["T","A"]);
      break;
    }
  }
  return newArr; 
}

pairElement("GCG");
