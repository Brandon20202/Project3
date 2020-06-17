
var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.floor( Math.random() * 14 ) ];


var arr = stuff.concat(random_value);
var sorted_arr = arr.sort();
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

console.log(results);