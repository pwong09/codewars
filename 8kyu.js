/* find smallest integer in the array */
// my solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0];
        for (let i = 0; i < args.length; i++) {
            if (args[i] < smallest) smallest = args[i];
        }
        return smallest;
    }
}
// solution using methods
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args)
//     }
// }

// remove string spaces
function noSpace(x){
    return x.replace(/ /g,'')
}

/* find min and max values in an array */
var min = function(list){
    for (let i = 0; i < list.length; i++){
        if (list[0] > list[i]) {
        list[0] = list[i];
    }
    }
    return list[0];
}

var max = function(list){
    for (let i = 0; i < list.length; i++){
        if (list[0] < list[i]) {
        list[0] = list[i];
        }
    }
    return list[0];
}

// using methods
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

/* simple multiplication */
function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9;
    }
}

// refactor
// const simpleMultiplication = (num) => (num % 2 === 0) ? num * 8 : num * 9;

/* sum mixed array */
function sumMix(x){
    let sum = 0;
    let num;
    x.forEach(function(el){
        num = Number(el);
        sum += num;
    })
    return sum;
}

// refactor
// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
// }

/* calculate BMI */
// my solution
function bmi(weight, height) {
    var b = weight / (height**2)
    if (b <= 18.5) {
        return "Underweight";
    } else if (b <= 25.0) {
        return "Normal";
    } else if (b <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// can refactor into:
// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";

/* convert string to number */
// my solution
const stringToNumber = function(str){
    const result = Number(str);
    return result;
}
// can refactor into:
// return Number(str);
