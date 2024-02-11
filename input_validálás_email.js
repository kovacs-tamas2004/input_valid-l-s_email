//1. megoldás
function isValidEmail(value) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return emailRegex.test(value);
  }
  
  var email1 = "sz3kovtam@vasvari.org";
  console.log(isValidEmail(email1));
  
  var email2 = "hibás-email";
  console.log(isValidEmail(email2));

//2. megoldás
/*function isValidEmail(value) {
    try {
      new URL('mailto:' + value);
      return true;
    } catch (error) {
      return false;
    }
  }
  
  var email1 = "teszt@example.com"; 
  console.log(isValidEmail(email1)); 
  
  var email2 = "hibás-email"; 
  console.log(isValidEmail(email2));*/

//3. megoldás
//HTML-ben