//rest operator 
const sum = (function(){
    return function sum(...args){   // here ... is rest operator
        return args.reduce((a,b)=>a+b,0);
    };
})();
console.log(sum(1,2,3,4,5)); // can pass any number of argument using rest operator

// Spread Operator
const arr1 = ['Jan','Feb','May'];
let arr2;
(function(){
    // arr2 = arr1      // this is just reference to arr1; so any changes to arr1 will reflect
                        // to arr2 as well
    arr2 = [...arr1];   // Spread opertor which make copy of array; so changes in arr1 will not
                        // reflect to arr2
    arr1[0] = "potato" 
})();
console.log(arr2);