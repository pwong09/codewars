/* N-th Power */
function index(array, n){
    return n >= array.length ? -1 : array[n]**n;
}
// refactor
// const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;
// function index(array, n){
//     return array[n] ** n || -1;
// }

/* play banjo */
function areYouPlayingBanjo(name) {
    return (name[0].toLowerCase() === 'r') ? name + ' plays banjo' : name + ' does not play banjo';
}

/* max of 3 integer combos */
function expressionMatter(a, b, c) {
    const num1 = a * (b + c)
    const num2 = a * b * c
    const num3 = a + b * c
    const num4 = (a+b) * c
    const num5 = a * b + c
    const num6 = a + b + c
    const array = [num1, num2, num3, num4, num5, num6]
    let max = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) max = array[i]
    }
    return max; // highest achievable result
}
//refactor with Math
// function expressionMatter(a, b, c) {
//     return Math.max(
//         a + b + c,
//         a * b * c,
//         a * (b + c),
//         (a + b) * c,
//         a + b * c,
//         a * b + c,
//     );
// }

/* validate username, no capitalized letters */
function validateUsr(username) {
    return /^[a-z\d\_]{4,16}$/.test(username) 
}

/* xor */
function xor(a, b) {
    if (a > b) {
        return true
    } else if (b > a) {
        return true
    } else {
        return false
    }
}
// refactor
// function xor(a, b) {
//     return a != b;
// }

/* replace certain digits with letters */
function correct(string)
{
    return string.replace(/5/g,"S").replace(/0/g,"O").replace(/1/g,"I");
}

/* freudian translator */
function toFreud(string) {
    if (string.length === 0) return ''
    const array = string.split(' ')
    for (let i = 0; i < array.length; i++) {
        array[i] = 'sex'
    }
    return array.join(' ')
}

// refactor
// var toFreud=s=>s.replace(/[^ ]+/g,'sex')
// const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')

/* reversed sequence */
const reverseSeq = n => {
    const array = [];
    for (let i = n; i > 0; i--) {
        array.push(i);
    }
    return array;
};
// refactor
// const reverseSeq = length => Array.from({length}, () => length--)
/* sum of array */
function sum (numbers) {
    "use strict";
    if(numbers.length === 0){
        return 0;
    }
    let sum = 0;
    numbers.forEach(number => {
    sum += number;
    })
    return sum;
};
// using methods
// function sum(numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
// }
// arrow function
// const sum = n => n.reduce((a,b) => a+b, 0);

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

/* removing every other elements */
function removeEveryOther(arr){
    for (let i = 1; i < arr.length; i++) {
        arr.splice(i, 1)
    }
    return arr
}
// refactor
// function removeEveryOther(arr){
//     return arr.filter(function(elem, index) {
//         return index % 2 === 0;
//     });
// }

/* set alarm */
// original
// function setAlarm(employed, vacation){
//     let alarmOn = false;
//     (employed === true && vacation === false) ? alarmOn = true : alarmOn = false;
//     return alarmOn;
// }
// refactor
function setAlarm(employed, vacation){
    let alarmOn = false;
    (employed && !vacation) ? alarmOn = true : alarmOn;
    return alarmOn;
}
// another cool way
// const setAlarm = (employed, vacation) => employed && !vacation;
// mind blown
// function setAlarm(employed, vacation){
//     return employed > vacation
// }

/* DNA to RNA conversion */
function DNAtoRNA(dna) {
    if (dna === '') return ''
    const array = dna.split('')
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'T') array[i] = 'U';
    }
    return array.join('')
}
// refactor
// function DNAtoRNA(dna){
//     return dna.replace(/T/g, 'U');
// }

/* count by x */
// original solution
// function countBy(x, n) {
//     let z = [];
//     let numbers = []
//     for (let i = 1; i <= n; i++) {
//       numbers.push(i * x)
//     }
//     for (let i = 0; i <= n; i++) {
//       //find multiple
//         if (numbers[i] % x === 0) {
//             z.push(numbers[i])
//         }
//     }
//     return z;
// }
// refactor
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
      z.push(x * i)
    }
    return z;
}

// another refactor
// const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

/* abbreviate two word name */
function abbrevName(name){
    const array = name.split(' ')
    const first = array[0].toUpperCase()
    const last = array[1].toUpperCase()
    return `${first[0]}.${last[0]}`
}
// refactor
// function abbrevName(name){
//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }
// another refactor way
// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }

/* count positives / sum negatives */
function countPositivesSumNegatives(input) {
    if (input === null) return [];
    const output = []
    if (input.length) {
        output[0] = 0
        output[1] = 0
        input.forEach(num => {
        if (num > 0) output[0]++;
        if (num <= 0) output[1] += num;
        })
    }
    return output;
}
// more readable
// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0) return [];
//     var positive = 0;
//     var negative = 0;
//     for (var i=0, l=input.length; i<l; ++i)
//     {
//     if (input[i] > 0)
//         ++ positive;
//     else
//         negative += input[i];
//     }
//     return [positive, negative];
// }

// refactor like whoa
// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

/* rock paper scissors */
const rps = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!'
    }
    if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper')) {
        return 'Player 1 won!'
    } else {
        return 'Player 2 won!'
    } 
}
// refactor
// const rps = (p1, p2) => {
//     if(p1 === p2) {
//         return 'Draw!'
//     }; 
//     return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
// }

/* needle in the haystack */
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
}

/* grasshopper summation */
var summation = function (num) {
    let numbers = [];
    let sum = 0;
    for (let i= 0; i <= num; i++) {
        numbers.push(i)
    }
    numbers.forEach(number => {
        sum += number;
    })
    return sum;
}

// refactor
// const summation = n => n * (n + 1) / 2;
// var summation = function (num) {
//     let result = 0;
//     for (var i = 1; i <= num; i++) {
//         result += i;
//     }
    
//     return result;
// }

/* even or odd */
function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}
// refactor
// function even_or_odd(number) {
//     return number % 2 ? "Odd" : "Even"
// }

/* square n sum */
function squareSum(numbers){
    let sum = 0;
    numbers.forEach(number => {
      sum += number ** 2;
    });
    return sum;
}
// refactor
// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//         return (n*n) + sum;
//     }, 0)
// }
// refactor
// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
// }

/* fake binary */
function fakeBin(x){
    const digits = x.split('');
    let str = '';
    digits.forEach(digit => {
        if (digit < 5) {
        str += 0
    } else {
        str += 1
    }
    })
    return str
}

// refactor
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

/* remove string spaces */
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
