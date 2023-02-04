function isLipYear(number){
    const remainder = number % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myLipYear = isLipYear(2020);
console.log(myLipYear);