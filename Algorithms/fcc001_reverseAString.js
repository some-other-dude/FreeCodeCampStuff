// fcc001_reverseAString.js
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    var revStr = "";

    str.split("").map(function (ch) {
        revStr = ch + revStr;
    });

    return revStr;
}

reverseString("hello");
