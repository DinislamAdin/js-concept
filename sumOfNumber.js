function sumOfNumber(number){
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum)
    }
    return sum;
}

sumOfNumber(10)
// console.log(23)