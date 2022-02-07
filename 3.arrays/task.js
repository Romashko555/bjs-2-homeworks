function compareArrays(arr1, arr2) {
let result;
result = (arr1.length == arr2.length && arr1.every((a, i) => arr2[i] == a));
console.log(result);
return result;
}

function advancedFilter(arr) {
let resultArr;
resultArr = arr.filter((arr) => arr % 3 === 0 && arr > 0).map((arr) => arr * 10);
console.log(resultArr);
return resultArr;
}