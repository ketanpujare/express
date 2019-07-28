// find length
var name = 'Ketan';
var name_len = name.length;
console.log(name_len)

// bracket notation
var first_letter = name[0];
console.log(first_letter);
var last_letter = name[name.length-1];
console.log(last_letter);

// array
var nestedArray = [["ketan",35,["76",98,"jeta"]],['hello',0],90];
console.log(nestedArray[0][2]);
var myArray = ["Jhon",28];
console.log(myArray);
// array can be modify with indexes
myArray[1] = 67;
console.log(myArray);
// push, pop & shift
myArray.push(["ketan"]); // add to end of array
console.log(myArray);
var removedItem = myArray.pop(); // removed last element 
console.log(myArray);
var removedFirstItem = myArray.shift() // removed first element
console.log(myArray);
myArray.unshift("Big Boy"); // add to front of array
console.log(myArray);
