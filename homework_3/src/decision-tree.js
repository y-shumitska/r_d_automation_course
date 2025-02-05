//This Else If construction counts the discount depending on 2 conditions.

let isLoyalClient = true;
let finalPrice = 600;

if (finalPrice >= 500 && isLoyalClient == true) {
    console.log('Discount = 10%');
} else if (finalPrice >= 500 || isLoyalClient == true) {
    console.log('Discount = 5%');
} else {
    console.log('No discount!');
}

console.log('-------------------------------');

// This Else If construction counts the discount depending on the day of week.

let day = 3; // Monday is 0.

if (day == 5) {
    console.log('Today is Saturday special discount = 20%!');
}
else if (day == 6) {
    console.log('Today is Sunday special discount = 30%!');
}
else {
    console.log('Today there are no special discounts. Come at weekends!');
}
