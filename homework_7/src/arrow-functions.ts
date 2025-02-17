const numbers = [4, 0.1, 694, 1233, 54];
const stringValues = ['Hello World!', 'Jane', 'is', 'becoming', 'AQA'];

const calculateArraySum = (someArray: string[] | number []): number | string => {
    let sum: number | string = 0;
    someArray.forEach((element: string | number) => {
        if (!isNaN(element as number)) {
            sum = 0;
        } else {
            sum = '';
        };
    });
    someArray.forEach((element: string | number) => {
        if (typeof sum === 'string') {
            sum = sum as string;
            element = element as string;
            sum = sum + element;
        } else {
            sum = sum as number;
            element = element as number;
            sum = sum + element;
        }
    });
    return sum;
};

console.log('The sum of the number elements of the array: ' + calculateArraySum(numbers));
console.log('The sum of the string elements of the array: ' + calculateArraySum(stringValues));
