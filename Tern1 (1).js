let a = Math.floor(Math.random() * 100);
console.log(a);
console.log((a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7));
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()


let result;

if (a > 10) {
    if ((a) > 5) {
        result = (2 * a) + 1;
    } else {
        if (a < 3) {
            result = 1;
        } else {
            if (2 * (a - 2) > 4) {
                result = 5;
            } else {
                result = (a % 2 === 0) ? 6 : 7;
            }
        }
    }
} else {
    if ((a * 2) > 5) {
        result = (2 * a) + 1;
    } else {
        if (a < 3) {
            result = 1;
        } else {
            if (2 * (a - 2) > 4) {
                result = 5;
            } else {
                result = (a % 2 === 0) ? 6 : 7;
            }
        }
    }
}

console.log(result);


switch(true) {
    case((a > 10 && a > 5) || (!(a > 10) && a * 2 > 5)) : 
        console.log((2 * a) + 1); 
        break;
    case ((a < 3 && 1 > 4) || (!(a < 3) && 2 * (a - 2) > 4)) : 
        console.log(5); 
        break;
    case (a % 2 == 0) :
        console.log(6);
        break;
    default :
        console.log(7);
        break;
}