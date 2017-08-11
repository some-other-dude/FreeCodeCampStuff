// fcc006_returnTheLargestArray.js
//
// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a simple for loop, and access
// each member with array syntax arr[i].


function largestOfFour(arr) {
    var result = [];
    // 1. iterate through top level array
    // 2. iterate through indivisual array
    // 3. compare current element to current largestOfFour
    // 4. add big to result array

    for (var i = 0; i < arr.length; i++) {
        var big = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > big){
                big = arr[i][j];
            }
        }
        result.push(big);
    }
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
