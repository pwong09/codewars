/* counting total duplicates, not duplicate instances */
function duplicateCount(text){
    const arr = text.toLowerCase().split('');
    const duplicates = {};
    let result = 0;
    arr.map(str => {
        if (!duplicates.hasOwnProperty(str)) {
            duplicates[str] = 0;
        } else {
        if (duplicates[str] === 0) {
            result += 1;
        }
        duplicates[str] = duplicates[str] + 1;      
        }
    });
    return result;
}

// refactor regex
// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

// refactor filter
// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//         return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }

/* Tribonacci - type of Fibonacci */
function tribonacci(signature,n){
    let arr = signature
    if (n === 0) {
        return []
    } else if (n === 1) { 
        return [signature[0]]
    } else {
        for (let i = n - 3; i > 0; i--) {
            let sum = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]
            arr.push(sum)
        }
    } 
    return arr;
}
// refactor
// function tribonacci(signature,n){  
//     for (var i = 0; i < n-3; i++) { // iterate n times
//       signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//     }
//     return signature.slice(0, n); //return trib - length of n
// }

/* Two Sum */
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j] // return indexes
            }
        }
    }
}

// Optimal Solution => T: O(n) S: 0(n)

const twoSum = function (numbers, target){
    const map = {}; // hash
    for (let p = 0; p < numbers.length; p++){
        const currMapVal = map[numbers[p]]
        if (currMapVal >= 0){
            return [currMapVal, p]
        } else {
            const numToFind = target - numbers[p]
            map[numToFind] = p
        } 
    }
    return null
}


/* Break camelCase */
function solution(string) {
    return string.split(/(?=[A-Z])/g).join(' ');
}

/* who likes it? */
function likes(names) {
    if (names.length === 0) return 'no one likes this';
    if (names.length < 2) {
        return `${names[0]} likes this`
    } else if (names.length < 3) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length < 4) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}
// refactor
// function likes(names) {
//     names = names || [];
//     switch(names.length){
//         case 0: return 'no one likes this'; break;
//         case 1: return names[0] + ' likes this'; break;
//         case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//         case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//         default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
// }


/* Array.diff */
function arrayDiff(a, b) {
    if (a == [] || b == []) return a;
    let diff = [];
    diff = a;
    b.forEach(el => {
        let elB = el;
        let i = 0;
        while (i < diff.length) {
            if (diff[i] === elB) {
                diff.splice(i, 1);
            } else {
                i++;
            }
        }
    })
    return diff;
}

// clever solution using methods:
// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
// }
// filter takes a callback function (b.includes)
// filter method returns a new array
// if b doesn't include e, return new array with e