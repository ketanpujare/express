
var globalVar = 10; // Global Scope Variable

function f1(){
   f1Var = 2;    // variable doesn't require assignment in function like "var" 
                 // but it has some afftect on there scope of access
                 // which means you variable with "var" will have different scope 
                 // than variable without "var"
                 
    var myVar = 5; // local scope
    return myVar;
}

function f2(){
    if(typeof globalVar != "undefined"){
        console.log(globalVar);
    }
    if(typeof f1Var != "undefined"){
        console.log(f1Var);
    }
}

f2();
