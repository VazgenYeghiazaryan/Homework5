// 1. Given an array.Write a recursive function that removes the first element and returns the given array. (without using
// arr.unshift(), assign second element to first, third element to second...)

let array = [1, 3, 4, 'n', 2, 5]
function removeFirstElement(arr) {
    if (arr.length < 2) {
        return [];
    } else {
        return arr.slice(1);
    }
}

console.log(removeFirstElement(array))

//2.Given an array of nested arrays.Write a recursive function that flattens it. (Hint create function that concat arrays)

const nestedArr = [1, [[[3, []]], 1], 0];

function concatedArray(arr) {
    let flattenedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenedArr = flattenedArr.concat(concatedArray(arr[i]));
        } else {
            flattenedArr.push(arr[i]);
        }
    }

    return flattenedArr;
}

console.log(flatten(nestedArr));

// 3. Given a number.Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.

let number = 29;

function SumOfNumber(number) {
    let sum = 0;
    let newNumber = number.toString();
    for (let i = 0; i < newNumber.length; i++) {
        sum += +newNumber[i];
    }
    while (sum > 9) {
        newNumber = sum.toString()
        let newSum = 0;
        for (let j = 0; j < newNumber.length; j++) {
            newSum += +newNumber[j]
        }
        sum = newSum
    }
    return sum
}
console.log(SumOfNumber(number))

//4. Given the list of the following readers: Output the books sorted by the percent in descending order which readStatus is true and add ‘%’ char in the end for percent value.

let bookReaders = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
];

function sortedBooks(bookReaders) {
    return bookReaders.filter((reader) => reader.readStatus === true)
        .sort((a, b) => b.percent - a.percent)
        .map((reader) => reader.book + ': ' + reader.percent + '%');
}
console.log(sortedBooks(bookReaders));
