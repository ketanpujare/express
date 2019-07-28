var voxel = {x:3.6,y:9.8,z:7.2};
// Bad way
var x = voxel.x; // x=3.6
var y = voxel.y; // y=9.8
var z = voxel.z; // z=7.2

// Destructuring assignment to assign variables from objects
const {x:a, y:b, z:c} = voxel; // a=3.6, b=9.8 c=7.2
// Destructuring assignment to assign variables from array
const [i,j,,,k] = [1,2,3,4,5,6];
console.log(i,j,k); // i=1, j=2, k=5 // k=5 because of multiple comma in between
 
 // remove first two element from array with rest operator
 let source = [1,2,3,4,5,6,7,8]
 function removeFirstTwo(list){
     let[ , , ...arr1] = list; // Two comma specify first two elements
     return arr1;
 }
 console.log(source);
 console.log(removeFirstTwo(source));
 
 // Destructuring with passing argument 
 const stats = {
     max:18.90,
     min:7.9,
     mode:3.9,
     average:6.8
 };
 const half = ({max,min}) => max+min/2.0; 
 console.log(half(stats));
 