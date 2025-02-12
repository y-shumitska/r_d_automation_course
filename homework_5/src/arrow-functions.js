const numbers = [4, 0.1, 694, 1233, 54];
const stringValues = ['Hello World!', 'Jane', 'is', 'becoming', 'AQA'];

const calculateArraySum = (someArray) => {
    let sum;
    someArray.forEach(element => {
        if (!isNaN(element)) {
            sum = 0;
        } else {
            sum = '';
        };
    });
    someArray.forEach(element => {
        sum = sum + element;
    });
    return sum;
};


console.log('The sum of the number elements of the array:' + calculateArraySum(numbers));
console.log('The sum of the string elements of the array:' + calculateArraySum(stringValues));
