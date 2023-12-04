// Create a function that checks if the input/parameter is an even number
function isEven(x) { if (x % 2 === 0) {

    return true;
    } else {
    
    return false;
    }    
}
console.log(isEven(6));


// Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter
function printNumbers(n1,n2){
    for(let i=n1; i<=n2; i++){
        console.log(i)
    }
}
console.log(printNumbers(1,16));
console.log(printNumbers(15,45));

// Create a function that sum the values in-between two numbers.
function calFunc(n1,n2){
    let sum=0;
    for(let i=n1; i<=n2; i++){
        sum+=i;
    }
    return sum;
}
console.log(calFunc(1,4))
console.log(calFunc(15,27))