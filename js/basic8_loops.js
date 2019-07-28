var myArray = [];

var i = 0;
// while loop
while (i<5){
    myArray.push(i);
    i++;
}
console.log(myArray);

// for loop
for (var k=0; k<5; k++){
    myArray.push(k);
}

console.log(myArray);

//iterate our Array
for (var i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}

// Do while loop // which runs atleast one time
var newArray = [];
var k =10;
do {
    newArray.push(k);
    i++;
} while (i<5)

console.log(newArray);

