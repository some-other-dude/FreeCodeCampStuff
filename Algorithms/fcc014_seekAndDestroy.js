// fcc014_seekAndDestroy.js
//
// You will be provided with an initial array (the first argument in the destroyer
// function), followed by one or more arguments. Remove all elements from the
// initial array that are of the same value as these arguments.


function destroyer(arr) {
  // Remove all the values
    var targets = [...arguments];
    targets.shift();

    for (var i = 0; i < targets.length; i++) {
        arr = arr.filter(function (a) {
            return a != targets[i];
        });
    }
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
