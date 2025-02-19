const numbers = [4, 0.1, 694, 1233, 54];
const stringValues = ['Hello World!', 'Jane', 'is', 'becoming', 'AQA'];

const calculateArraySum = (someArray: string[] | number []): number | string => {
    if (someArray.length > 0 && typeof someArray[0] === 'string') {
        let sum = '';
        (someArray as string[]).forEach((element) => {
            sum += element;
        });
        return sum;
    } else if (someArray.length > 0) {
        let sum = 0;
        (someArray as number[]).forEach((element) => {
            sum += element;
        });
        return sum;
    } else {
        return '';
    }
};

console.log('The sum of the number elements of the array: ' + calculateArraySum(numbers));
console.log('The sum of the string elements of the array: ' + calculateArraySum(stringValues));
