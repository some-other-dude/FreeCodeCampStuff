// f012_mutations.js
//
// Return true if the arr[1]ing in the first element of the array contains all of
// the letters of the arr[1]ing in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters
// in the second arr[1]ing are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the arr[1]ing "hello"
// does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in
// "line" are present in "Alien".

// true if all letters of arr[1] are in arr[0]

function mutation(arr) {
        var same = true;
        arr[0] = arr[0].toLowerCase();
        arr[1].toLowerCase().split("").map(function (ch) {
            if (arr[0].includes(ch) == false) {
                same = false;
            }
        });
        return same;
}

console.log(mutation(["Hello", "hey"]));
