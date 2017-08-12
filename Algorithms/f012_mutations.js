// f012_mutations.js
//
// Return true if the string in the first element of the array contains all of
// the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters
// in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello"
// does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in
// "line" are present in "Alien".

// true if all letters of arr[1] are in arr[0]

function mutation(arr) {
    var str1 = arr[0];
    var str2 = arr[1];

    function compareStrings(str, pool) {
        var same = true;
        pool = pool.toLowerCase();
        str.toLowerCase().split("").map(function (ch) {
            if (pool.includes(ch) == false) {
                same = false;
            }
        });
        return same;
    }
    return compareStrings(str2, str1);
}

console.log(mutation(["Hello", "hey"]));
