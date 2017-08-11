// f010_chunkyMonkey.js
// Write a function that splits an array (first argument) into groups the length
// of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
    var result = [];
    var i = Math.ceil(arr.length/size);// use ceiling to make sure we get all of arr

    while (i > 0) {
        result.push(Array.prototype.concat(arr.splice(0,size)));
        i--;
    }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
