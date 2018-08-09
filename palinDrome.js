function palindrome(str) {
  const newStr = str.toLowerCase().replace(/[\W+_]/g, '');
  let firstHalf;
  let secondHalf;
  const arr = newStr.split('');

    if(arr.length % 2==0){
     firstHalf = arr.slice(0, arr.length / 2);
     secondHalf = arr.slice((arr.length / 2), arr.length);
    }
    else{
       firstHalf = arr.slice(0, arr.length / 2);
      secondHalf = arr.slice((arr.length / 2) + 1, arr.length);
    }
   
   let result = () => firstHalf.reverse().join('') == secondHalf.join('');
    
    console.log(result());
    return result();  

}

palindrome("My age is 0, 0 si ega ym.");
