// fcc003_checkForPalindromes.js
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
    // Good luck!
    var revStr = ""; // reversed str
    var pool = "abcdefghijklmnopqrstuvwxyz1234567890";

    // 1. convert to lowercase
    // 2. get rid of non-alphanumeric characters
    str = str.toLowerCase().split("").map(function (ch) {
        if(pool.includes(ch)) {
            // 3. create reversed string
            revStr = ch + revStr;
            return ch;
        }
    }).join("");

    // 4. Compare and return result
    return (str==revStr);

}

palindrome("eye");
