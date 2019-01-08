/**
 * --------------------------------------------------------------
 *                   PROGRAM FUNCTIONALITY
 * 
 *    It gets as an input a positive integer number and outputs
 *    the corresponding Roman number in Latin characters.
 *-------------------------------------------------------------- 
*/


function convertToRoman(num) {
  
  num = num.toString(10);  // convert to string (in decimal representation) so that I can access the individual characters one by one.
  let array = [];  // array where the latins will be stored.
  let string;  // the final result.

  for (let i = num.length - 1; i >= 0; i--) {  // for Loop that iterates through all digits of the number.
    if (i === num.length - 1) {            // if Conditional that converts the first digit from the end of the number.
      switch (num[num.length - 1]) {
        case '0':
          break;
        case '1':
          array.unshift("I");
          break;
        case '2':
          array.unshift("II");
        break;
        case '3':
          array.unshift("III");
        break;
        case '4':
          array.unshift("IV");
        break;
        case '5':
          array.unshift("V");
        break;
        case '6':
          array.unshift("VI");
          break;
        case '7':
          array.unshift("VII");
        break;
        case '8':
          array.unshift("VIII");
        break;
        case '9':
          array.unshift("IX");
        break;
      }
    }
    else if (i === num.length - 2) {   // else if Conditional that converts the second digit from the end of the number.
      switch (num[num.length - 2]) {
        case '0':
          break;
        case '1':
          array.unshift("X");
          break;
        case '2':
          array.unshift("XX");
        break;
        case '3':
          array.unshift("XXX");
        break;
        case '4':
          array.unshift("XL");
        break;
        case '5':
          array.unshift("L");
        break;
        case '6':
          array.unshift("LX");
          break;
        case '7':
          array.unshift("LXX");
        break;
        case '8':
          array.unshift("LXXX");
        break;
        case '9':
          array.unshift("XC");
        break;
      }
    }
    else if (i === num.length - 3) {  // else if Conditional that converts the third digit from the end of the number.
      switch (num[num.length - 3]) {
        case '0':
          break;
        case '1':
          array.unshift("C");
          break;
        case '2':
          array.unshift("CC");
        break;
        case '3':
          array.unshift("CCC");
        break;
        case '4':
          array.unshift("CD");
        break;
        case '5':
          array.unshift("D");
        break;
        case '6':
          array.unshift("DC");
          break;
        case '7':
          array.unshift("DCC");
        break;
        case '8':
          array.unshift("DCCC");
        break;
        case '9':
          array.unshift("CM");
        break;
      }
    }
    else if (i === num.length - 4) {   // else if Conditional that converts the fourth digit from the end of the number,
      switch (num[num.length - 4]) {   // until the case that the digit is equal to 3.
        case '0':
          break;
        case '1':
          array.unshift("M");
          break;
        case '2':
          array.unshift("MM");
        break;
        case '3':
          array.unshift("MMM");
        break;
        case '4':    // for the rest of the cases, we cannot represent the number so we get a notification message.
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          array = ["Number is higher than 3999, so it cannot be represented with this algorithm :( !!"];
        break;
      }
    }
    else {   // also for a number with length longer than 4 digits we cannot represent it, so we get a notification message.
      array = ["Number is longer than 4 digits, so it cannot be represented with this algorithm :( !!"];
    }
  }
  
  
  
  
  string = array.join("");  // concatenates all array's elements to a single string.
  
  return string;

 }
 
 console.log(convertToRoman(568));


 // MeDiCaL XaVIer (1000, 500, 100, 50, 10, 5, 1). Mnemonic for the Latin Basic Number Symbols.
 // A big dash (-) over each letter, multiplies the value by 1000.
 // These 'dashed' letters are used for numbers larger than 3999.