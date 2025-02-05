//This Switch construction counts the discount depending on the day of week.

let day = 1; //Monday is 0.

switch (day) {
    case 5: {
        console.log('Today is Saturday special discount = 20%!');
        break;
    }
    case 6: {
        console.log('Today is Sunday special discount = 30%!');
        break;
    }
    default: {
        console.log('Today there are no special discounts. Come at weekends!');
        break;
    }
}

