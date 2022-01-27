function solveEquation(a, b, c) {
  let arr;
  "use strict";
  let D = b**2-4*a*c;
  if (D < 0) {
    arr = [];
  }
  else if (D === 0) {
    arr = [-b/(2*a)];
  }
  else if (D > 0) {   
    arr = [(-b + Math.sqrt(D)) /(2*a), (-b - Math.sqrt(D))/(2*a)];
  }
  else {
    console.log("неизвестная ошибка");
  }
  return arr; // array
}




//function calculateTotalMortgage(percent, contribution, amount, date) {
//  let totalAmount;

//   код для задачи №2 писать здесь

//  return totalAmount;
//}
