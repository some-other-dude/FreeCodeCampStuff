// fcc004_findTheLongestWord.js
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {
    var longest = 0; // holds the current longest word length

    // 1. split the string into words
    // 2. iterate over the words
    // 3. compare current word length to current longest
    // 4. update longest if necessary

    str.split(" ").map(function (word) {
        if (word.length > longest) {
            longest = word.length;
        }
    });

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
