/* mumbling */
function accum(s) {
    let result = s[0].toUpperCase()
    for (let i = 1; i < s.length; i++) {
        const string = s[i].repeat(i+1)
        result += "-" + string[0].toUpperCase() + string.slice(1).toLowerCase()
    }
    return result
}
// refactor
// return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

/* number of people on bus */
var number = function(busStops){
    let numOfPassengers = 0
    busStops.forEach(stop => {
        numOfPassengers += stop[0] - stop[1]
    })
    return numOfPassengers
}
// refactor
// busStops.reduce((rem, [on, off]) => rem + on - off, 0);

/* factorial */
function FirstFactorial(num) { 
    if (num < 0) return -1
    if (num === 0 || num === 1) return 1
    let fact = num
    while (num > 0) {
        num--;
      fact *= num;
    }
    return fact; 
}
// refactor - recursion?
// function factorial(num) {
//     if (num < 0) {
//         return -1;
//     } else if (num === 0) {
//         return 1;
//     } else {
//         return (num * factorial(num -1));
//     }
// }
/* remove anchor from url */
function removeUrlAnchor(url){
    return url.split('#')[0];
}
/* exes and ohs */
function XO(str) {
    const arr = str.toLowerCase().split('');
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') { 
            countX++
        } else if (arr[i] === 'o') {
            countO++
        }
    }
    return countX === countO ? true : false;
}

// refactor 
// function XO(str) {
//     const arr = str.toLowerCase().split('');
//     return arr.filter(el => el === 'x').length === arr.filter(el => el === 'o').length;
// }

/* return highest & lowest numbers when inputed as string of numbers */
function highAndLow(numbers){
    let numArr = [];
    numbers.split(' ').forEach(num => numArr.push(parseInt(num)));
    numArr = numArr.sort((a, b) => a - b);
    return numArr[numArr.length-1].toString() + " " + numArr[0].toString()
}
// refactor
// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

/* return index of element that is midpoint of other 2 elements */
function gimme(triplet){
    if ((triplet[0] < triplet[1] && triplet[0] > triplet[2]) || (triplet[0] >triplet[1] && triplet[0] < triplet[2])){
        return 0 ;  
    } else if ((triplet[1] < triplet[0] && triplet[1] > triplet[2]) || (triplet[1] >triplet[0] && triplet[1] < triplet[2])){
        return 1  
    } else if ((triplet[2] < triplet[0] && triplet[2] > triplet[1]) || (triplet[2] >triplet[0] && triplet[2] < triplet[1])){
        return 2  
    }
}
// refactor
// function gimme(triplet) {
//     return triplet.indexOf(triplet.concat().sort(function(a, b) { return a - b })[1])
// }
/* concat makes a shallow copy of original triplet array. 
Copy is sorted so the middle element is at index 1
Go back to original array, triplet, to find original index 
of that middle element in copy
*/

/* return max & min of an array */
function minMax(arr){
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min) {
            min = arr[i]
        }
    }
    return [min, max]
}

//refactor
// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
// }

/* ends with */
function solution(str, ending){
    return str.endsWith(ending);
}

/* checking consecutiveness for a, b */
function consecutive(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a) {
            return arr[i+1] === b
        } else if (arr[i] === b) {      
            return arr[i+1] === a
        }
    }
    return false
}
//refactor
// function consecutive(arr, a, b) {
//     return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
// }

/* length and 2 alternating values */
function alternate(n, firstValue, secondValue){
    if (n === 0) return [];
    const newArray = []
    for (let i = 0; i < n; i++) {
        i % 2 === 0 ? newArray.push(firstValue) : newArray.push(secondValue)
    }
    return newArray
}
/* square every digit */
function squareDigits(num){
    num = num.toString();
    const array = num.split('');
    for (let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
        array[i] = array[i]**2
    }
    num = array.join('')
    return parseInt(num);
}
// refactor
// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
// }

/* you're a square! */
var isSquare = function(n){
    if (n < 0) return false;
    if (n === 0) return true;
    return Number.isInteger(Math.sqrt(n))
    
}
// refactor
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

/* shortest word */
function findShort(s){
    const array = s.split(' ');
    let shortest = array[0]
    array.forEach(word => {
        if (word.length < shortest.length) shortest = word;
    })
    return shortest.length
}
// refactor
// function findShort(s){
//      return Math.min.apply(null, s.split(' ').map(w => w.length));
// }

/* get middle character */
function getMiddle(s) {
    if (s.length % 2 !== 0) { // odd numbers
        let mid = ((s.length - 1) / 2)
        return s[mid]
    } else {
        let mid = parseInt(s.length / 2);
        return `${s[mid-1]}${s[mid]}`
    }
}

// refactor
// function getMiddle(s) {
//     return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

/* categorize a new member */
function openOrSenior(data){
    const output = []
    // data is an array of arrays[0][1] [age, handicap]
    data.forEach(info => {
        if (info[0] >= 55 && info[1] > 7) {
        output.push('Senior');
    } else {
        output.push('Open');
    }
    });
    return output // an array of strings
}

// refactor
// function openOrSenior(data){
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

/* Jaden casing strings lol */
String.prototype.toJadenCase = function () {
    const newArray = this.split(' ')
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1)   
    }
    return newArray.join(' ')
}
// refactor
// String.prototype.toJadenCase = function () { 
//     return this.split(" ").map(function(word){
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
// }
// refactor
// String.prototype.toJadenCase = function () {
//     return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
// };

/* vowel count */
function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    vowels.forEach(v => {
        for (let i = 0; i < str.length; i++) {
            if (v === str[i]) vowelsCount++;
        }
    })
    return vowelsCount;
}

// refactor
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// }