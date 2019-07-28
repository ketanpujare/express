// Template literal with muli-line and string interpolation
const person = {
    name:"Ketan Pujare",
    age:25
};

const greetings = `Hello, My name is ${person.name} and I am!
        ${person.age} years old.`;      

console.log(greetings)

const craetePerson = (name,age,gender) => ({name,age,gender});
console.log(craetePerson("ketan",25,"M"));
 
 // object can contain functions
 const bicycle = {
     gear:2,
     setGear(newGear){
         "use strict";
         this.gear = newGear;
     }
 };
 console.log(bicycle.gear); 
 bicycle.setGear(5);
 console.log(bicycle.gear);