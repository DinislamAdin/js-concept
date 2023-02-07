function getSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum)
    }
}


function getSumOddArray(numbers){
    const oddNumbers =[];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 != 0){
            console.log(index, element);
            oddNumbers.push(element)
        }
    }
    return oddNumbers;
}

const myNumbers = [43, 55, 34, 88, 22, 15];
const oddNumbers = getSumOddArray(myNumbers);
console.log(oddNumbers);
// getSum(myNumbers);