// fcc009_truncateAString.js
//
// Truncate a string (first argument) if it is longer than the given maximum
// string length (second argument). Return the truncated string with a ... ending.
//
// Note that inserting the three dots to the end will add to the string length.
//
// However, if the given maximum string length num is less than or equal to 3,
// then the addition of the three dots does not add to the string length in
// determining the truncated string.

// RULES
// 1. if max length <=3, then str is max length + "..."
// 2. if str is longer than max length -3, then truncate to max length + 3 and
//    add "..." to the end.
// 3. if str length is less than max length then do nothing.

function truncateString(str, num) {

if (num <= 3) {
    str = str.substr(0, (num))+"...";
} else if (str.length > (num-3) && (num < str.length)) {
      str = str.substr(0, (num - 3))+"...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
