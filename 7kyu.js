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