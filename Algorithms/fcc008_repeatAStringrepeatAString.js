// fcc008_repeatAStringrepeatAString.js
//
// Repeat a given string (first argument) num times (second argument). Return an
// empty string if num is not a positive number


function repeatStringNumTimes(str, num) {
  // repeat after me
  var result = "";

  while (num > 0) {
      result += str;
      num--;
  }
  return result;
}

repeatStringNumTimes("abc", 3);
