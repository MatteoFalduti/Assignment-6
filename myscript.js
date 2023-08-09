function validatename() {

  var stringName = document.getElementById("firstName").value;
  stringName = stringName.trim();
  var stringLength = stringName.length;

  if (stringLength == 0) { 
    showErrors("<p><mark>Name</mark><br /> - The name field can not be left empty or just blank characters<br />" + nameMessageRules + "</p>");
    return false;
  } 
  var countNonAlpha = 0;		
  stringName = stringName.toUpperCase();          

  for (var i=0;i<stringLength;i++ ) {
   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) 
    countNonAlpha++;
    break;
   }  

  if  (countNonAlpha) {
     showErrors("<p><mark>Name</mark><br /> - Only alphabetic characters are allowed for the name<br />" + nameMessageRules + "</p>");
       return false;
    }
  
  return true;
  }

  function validatePhoneNumber() {

    var str = document.getElementById("phone").value;
    str = str.trim();
    var stringLength = str.length;

    if (stringLength == 0) { 
    showErrors("<p><mark>Phone Number</mark><br /> - The phone number field can not be left empty or just blank characters<br />" + messageRules + "</p>");
        return false;
    }  

    if (str.charAt(3) !== '-' || str.charAt(7) !== '-' || stringLength !== 12) {
    showErrors("<p><mark>Phone Number</mark><br /> - The phone number was in wrong format.<br />" + messageRules + "</p>");
        return false;
  }  
    else { 
      var i, flag = true, myArray = str.split('-');
    for (i = 0; i <3; i++) {
       if (parseInt(myArray[i]) != myArray[i]) {
        flag = false;
      break;
     }
    }
    
    if (!flag) {
       showErrors("<p><mark>Phone Number</mark><br /> - The phone number was in wrong format.<br />" + messageRules + "</p>");
           return false;
    }
  }

    return true;
  } 


function validatePostal () {
  var country = document.getElementById("country").value;
  if (country === "Canada")
  {
    var stringPostal = document.getElementById("postal").value;
    stringPostal = stringPostal.trim();
    var stringLength = stringPostal.length;
  
    for (var i =0; i < stringLength; i++){
      if (!((stringPostal.charCodeat(1) > 64 && (stringPostal.charCodeAt(1) < 91))
      || (stringPostal.charCodeat(3) > 64 && (stringPostal.charCodeAt(3) < 91))
      || (stringPostal.charCodeat(5) > 64 && (stringPostal.charCodeAt(5) < 91)))) {
        return false;
    }
    else if (!((stringPostal.charCodeat(2) > 47 && (stringPostal.charCodeAt(2) < 58))
    || (stringPostal.charCodeat(4) > 47 && (stringPostal.charCodeAt(4) < 58))
    || (stringPostal.charCodeat(6) > 47 && (stringPostal.charCodeAt(6) < 58)))) {
      return false;
    }
    else {
      return true;
    }
  }
  // const postalPattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
  }
}
