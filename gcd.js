'use strict';

function gcd(a, b) {
    let x = 1;
    if (a == 0 || b == 0) {
        if (a == 0) return b;
        else return a;
    }
    else {
        while (a != 0 && b != 0) {
            if (a > b) a = a % b;
            else b = b % a;
            x = a + b;
        }
        return x;
    }
}

console.log(gcd(18, 0));
console.log(gcd(0, 25));
console.log(gcd(45, 18));