function palindrome(str) {

  
  let strToArr = str.toLowerCase().split(''); // нижний регистр + перевод в массив
  let strToArrToReverse = strToArr.reverse(); // переворот
  let strToArrToReverseToJoin = strToArrToReverse.join(''); // перевод в троку
   
  if (str === strToArrToReverseToJoin) { // строка до ==== и строка после
    return true; 
  } else {
    return false;
      }
  }

palindrome('racecar');
palindrome('car');