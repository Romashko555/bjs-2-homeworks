// Задание 1

function getArrayParams(arr) {
  let min = 100, max = -100, sum = 0, avg;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (min >= arr[i]) {
      min = arr[i];
    } 
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
let arr = [7, 76, 2, 33, 66];
getArrayParams(arr);




// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
  if (max < func(arrOfArr[i])) {
     max = func(arrOfArr[i]); 
  }
 }
  return max;
}
arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]];


// Задание 3
function worker2(arr) {
let minWorker = arr[0];
let maxWorker = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (minWorker > arr[i]) {
    minWorker = arr[i];
  }
  if (maxWorker < arr[i]) {
    maxWorker = arr[i];
  }
}
let deltaWorker = Math.abs(maxWorker - minWorker);
return deltaWorker;
}


