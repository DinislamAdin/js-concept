// console.log(7/2);
// console.log(17/2);
// console.log(481/2);
// console.log(75/2);
// console.log(123/2);



// console.log(7/2);
// console.log(17/2);
// console.log(481/2);
// console.log(75/2);
// console.log(123/2);

function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        console.log('the number is Even')
        return true;
    }
    else{
        console.log('the number is Odd');
        return false;
    }
}

const myNumber =  isEven(342);
console.log(myNumber);
const hernumber = isEven(341);
console.log(hernumber);
