const numbers = [12, 400, 2.9, 13932, 1, 34, 94];
const maleNames = ['Andrii', 'Mark', 'Nazar', 'Roman', 'Oleg'];
const isHappy = [true, false, true, true, false, false, true];
const emptyArr = [];
const differentTypes = ['apples', 393, true, {userName: 'Yevheniia', userBalance: 3829}];


// Increasing numbers by 1 in array with forEach
function increaseByOne(item, index, arr) {
    arr[index] = item + 1;;
}

const modifiedNumbers = numbers.slice();
modifiedNumbers.forEach(increaseByOne);
console.log(modifiedNumbers.toString());

console.log('------------------------------');

// Increasing numbers by 1 in array with map()
const modifiedNumbersMap = numbers.map(function(i){
    return i + 1;
});
console.log(modifiedNumbersMap.toString());

console.log('------------------------------');

// Accessing an array element
const name = maleNames[1];
console.log(name);

console.log('------------------------------');

// Adding an array element to an empty array
emptyArr.push("Vasia");
console.log(emptyArr.toString());

console.log('------------------------------');

// Deleting the first element
differentTypes.shift();
console.log(differentTypes.toString());

console.log('------------------------------');

// Deleting and returning the last element
const number = numbers.pop();
console.log(numbers);
console.log('The deleted element is ' + number);

console.log('------------------------------');

// Adding the element to the beginning
maleNames.unshift("Alex");
console.log(maleNames.toString());

console.log('------------------------------');

// Filtering numbers which are > 100
const numbersOverHundred = numbers.filter(filterOverHundred);
function filterOverHundred(number) {
    return number > 100;
}
console.log(numbersOverHundred);

console.log('------------------------------');

// Finding an element in an array
const foundName = maleNames.find(findName);
function findName(foundName) {
    return foundName === 'Oleg';
}
console.log(foundName);

console.log('------------------------------');

// Sorting elements
maleNames.sort();
console.log(maleNames);

console.log('------------------------------');

// Concatinating 2 arrays
const allMaleNames = maleNames.concat(emptyArr);
console.log(allMaleNames.toString());

console.log('------------------------------');

// Checking if the array has 'true' values
console.log(isHappy.includes(true));

console.log('------------------------------');

// Concatenating elements of the array by some separator
console.log(maleNames.join('-'));

console.log('------------------------------');

// Merging 2 arrays
const mergedArray = [...numbers, ...differentTypes];
console.log(mergedArray);
