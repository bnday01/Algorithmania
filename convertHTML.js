function convertHTML(str) {
  let char;
  let result = [];
  function substitute(char){
    switch (char){
       case "&": return "&amp;";
       break;
       case "<": return "&lt;";
       break;
       case ">": return "&gt;";
       break;
       case '"': return "&quot;"; 
       break;
       case "'": return "&apos;";
       break;
      }
    }

    str.split('').map(function(letter){ 
       if(letter.match(/[&"<>']/)){
         result.push(substitute(letter));
        }
        
        else{
         result.push(letter);
        }
       });
    console.log(result.join(''));
    return result.join('');
    
  
}

convertHTML('Stuff in "quotation marks"');