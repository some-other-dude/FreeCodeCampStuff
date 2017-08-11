// fcc005_titleCaseASentence.js
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting
// words like "the" and "of".


function titleCase(str) {

    // 1. split the string into words
    // 2. iterate over the words
    // 3. replace the first letter of each word with uppercase letter
    // 4. join the words back into a sentence

    str = str.split(" ").map(function (word) {
        var first = "";
        first = word.substr(0,1).toUpperCase();
        return first + word.substr(1).toLowerCase();
    }).join(" ");

  return str;
}

titleCase("I'm a little tea pot");
