// Anonymous Function can be write using Arrow
// Anonymous Function without arrow
var magic = function(){
    return new Date();
};
console.log(magic());

// Anonymous Function with arrow
const magicwitharrow = () => new Date(); // same function as above
console.log(magicwitharrow());

const myConcat = (arr1,arr2) => arr1.concat(arr2); // arrow function with argument 
                                                 // with "concat" function which use for array // // concatenation
console.log(myConcat([1,2],[3,4,5]));

// Higer Order arrow function
const realNumArray = [4,5.6,-9,3,-23]
const squareListWholeIntger = arr => { // if argument is single than it does not need parenthesis
    const squaredIntger = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
    return squaredIntger;
};
console.log(squareListWholeIntger(realNumArray));

// Default Paramenter
const increment = (num,value=1) => num+value;
console.log(increment(5,3));
console.log(increment(5));
