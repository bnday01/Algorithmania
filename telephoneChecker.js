function telephoneCheck(str) {
  // Good luck!
      //US ONLY
    if (/\(\d{3}-\d{3}-\d{4}/.test(str)){
    return false;
    } 
    else if (/\d{3}\)-\d{3}-\d{4}/.test(str)){
   return false;
    }
    else if (/^1?\(\d{3}\)\d{3}-\d{4}/.test(str)){
      return true;
    } 
    else if (/^1?\s*[\(]?\d{3}[\)]?[-|\s*]\d{3}[-|\s*]\d{4}/g.test(str)){
     return true;
    }
    else if (/[^1]\d{10}/.test(str)){
     return false;
    }
    else if( /\d{10}/.test(str)){
      return true;
    }
    else {
      return false;
    }
}

telephoneCheck("555-555-5555");