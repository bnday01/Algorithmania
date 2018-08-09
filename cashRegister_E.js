function checkCashRegister(price, cash, cid) {
  
  //Create a register object
  var register ={
    "PENNY": 0,
    "NICKEL": 0,
    "DIME": 0,
    "QUARTER": 0,
    "ONE": 0,
    "FIVE": 0,
    "TEN": 0,
    "TWENTY": 0,
    "ONE HUNDRED":0,
  }

  //Link the cid to the register object
  let prop;
  function setRegister(cid){
    for (var i = 0; i < cid.length;i++){
      register[cid[i][0]] = cid[i][1];
    }
    return register;
  }
  function getChange(prop){
      var sum = 0;
      for (prop in register){
      sum += register[prop];
      }
      return sum;
 n  }
  function setProp(cid){
   for (var i = 0; i < cid.length; i++){
      prop = cid[i][0];
      return getChange(prop);
   }
  }
  let newRegister = setRegister(cid);
  setProp(newRegister);  
  


//step 1: Add cash to newRegister.
  const change = cash - price;
  let cashToAdd = cash;
  function updateRegister(cash){

   if (cashToAdd >= 100){
     cashToAdd -= 100;
     newRegister["ONE HUNDRED"] = newRegister["ONE HUNDRED"] + 100;
     return updateRegister(cashToAdd);
   }
   if (cashToAdd >= 20){
     cashToAdd -= 20;
     newRegister["TWENTY"] = newRegister["TWENTY"] + 20;
     return updateRegister(cashToAdd);
   }
   if (cashToAdd >= 10){
     cashToAdd -= 10;
     newRegister["TEN"] = newRegister["TEN"] + 10;
     return updateRegister(cashToAdd);
   }
   if (cashToAdd >= 5){
     cashToAdd -= 5;
     newRegister["FIVE"] = newRegister["FIVE"] + 5;
     return updateRegister(cashToAdd);
   }
   if (cashToAdd >= 1){
     cashToAdd -= 1;
     newRegister["ONE"] = newRegister["ONE"] + 1;
     return updateRegister(cashToAdd);
   }
   if (cashToAdd >= 0.25){
     cashToAdd -= 0.25;
     newRegister["QUARTER"] = newRegister["QUARTER"] + 0.25;
     return updateRegister(cashToAdd);
   }
   if (cashToAdd >= 0.10){
     cashToAdd -= 0.10;
     newRegister["DIME"] = newRegister["DIME"] + 0.10;
     return updateRegister(cashToAdd);
   }
   if (cashToAdd >= 0.05){
     cashToAdd -= 0.05;
     newRegister["NICKEL"] = newRegister["NICKEL"] + 0.05;
     return updateRegister(cashToAdd);
   }
   if (cashToAdd > 0){
     cashToAdd -= 0.01;
     newRegister["PENNY"] = newRegister["PENNY"] + 0.01;
     return updateRegister(cashToAdd);
   }
    else{return newRegister;}
  }
 

  //step 2: Set the status of the register
  let status = "";
  
        updateRegister(cash);


  //Step 3: Return the corresponding change key/values
    let returned;
    var changeCounter ={
    "PENNY": 0,
    "NICKEL": 0,
    "DIME": 0,
    "QUARTER": 0,
    "ONE": 0,
    "FIVE": 0,
    "TEN": 0,
    "TWENTY": 0,
    "ONE HUNDRED":0,
  }
    function getChange(change){
     let cashToSubtr = change; 
   if (cashToSubtr >= 100){
     cashToSubtr -= 100;
     changeCounter["ONE HUNDRED"] = changeCounter["ONE HUNDRED"] + 100;
     return getChange(cashToSubtr);
   }
   if (cashToSubtr >= 20){
     cashToSubtr -= 20;
     changeCounter["TWENTY"] = changeCounter["TWENTY"] + 20;
     return getChange(cashToSubtr);
   }
   if (cashToSubtr >= 10){
     cashToSubtr -= 10;
     changeCounter["TEN"] = changeCounter["TEN"] + 10;
     return getChange(cashToSubtr);
   }
   if (cashToSubtr >= 5){
     cashToSubtr -= 5;
     changeCounter["FIVE"] = changeCounter["FIVE"] + 5;
     return getChange(cashToSubtr);
   }
   if (cashToSubtr >= 1){
     cashToSubtr -= 1;
     changeCounter["ONE"] = changeCounter["ONE"] + 1;
     return getChange(cashToSubtr);
   }
   if (cashToSubtr >= 0.25){
     cashToSubtr -= 0.25;
     changeCounter["QUARTER"] = changeCounter["QUARTER"] + 0.25;
     return getChange(cashToSubtr);
   }
   if (cashToSubtr >= 0.10){
     cashToSubtr -= 0.10;
     changeCounter["DIME"] = changeCounter["DIME"] + 0.10;
     return getChange(cashToSubtr);
   }
   if (cashToSubtr >= 0.05){
     cashToSubtr -= 0.05;
     changeCounter["NICKEL"] = changeCounter["NICKEL"] + 0.05;
     return getChange(cashToSubtr);
   }

   if (cashToSubtr > 0){
     cashToSubtr -= 0.01;
     changeCounter["PENNY"] = changeCounter["PENNY"] + 0.01;
     return getChange(cashToSubtr);
   }

   else {
     return changeCounter;
    }
    
  }
    getChange(change);
    
    
    //Handle insufficient cash
    if(cash < price){returned = [];}
    else {returned = Object.entries(changeCounter).sort((a,b) => b[1]-a[1]).filter(val => val[1] !== 0);}

    let result = {"status": status, "change": returned};
           if (getChange(prop) < cash){
      returned = [];
    }
   
   
    console.log(result);

    console.log(register);

  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);