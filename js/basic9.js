// random number between 0 and 0.99
console.log(Math.random());

// random whole number between 0 to 19
console.log(Math.floor(Math.random()*20));

// random between min and max
function ourRandomRange(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(ourRandomRange(10,21));

// convert str in integer
function converToInteger(str){
    return parseInt(str,2) // if number is binary //hence "2"
}
console.log(converToInteger("101110"))

// nested Ternary operator
function checkSign(num){
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkSign(-98))
