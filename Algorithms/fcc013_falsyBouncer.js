// fcc013_falsyBouncer.js
//
// Remove all falsy values from an array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN

function bouncer(arr) {
    var result = [];
    arr.map(function (foo) {
        if (foo != false && foo != null && foo != 0 && foo != "" && typeof foo != undefined && Number.isNaN(foo) != true) {
            result.push(foo);
        }
    });
    return result;
}
console.log(bouncer([false, null, 0, NaN, undefined, ""]));


// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2]
