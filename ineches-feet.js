// var myIneches = 70;
// var myFeet = myIneches /12;
// console.log(myFeet);



function inechestofeet(ineches){
    const feet = ineches/12;
    return feet;
}

const myIneches = 70;
const myFeet = inechestofeet(myIneches);
console.log(myFeet);