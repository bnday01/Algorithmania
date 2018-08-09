//De-encrypt the ROT13 cypher

function rot13(str) { // LBH QVQ VG!
  
  let newStr = str.split('').map(function(letter){
   if (/[A-Z0-9]/.test(letter)){
   return letter.replace( /\w*\d*/, String.fromCharCode((letter.charCodeAt(0) % 26) + 65));}
   else {return letter;}
  }).join('');

  console.log(newStr);
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
