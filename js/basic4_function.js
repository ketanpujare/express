 // if elseif else
 function checkVal(val){
    if(val > 50){
        return "Greater Than 50";
    } else if (val < 10){
        return "Less Than 10";
    } else{
        return "Between 10 and 50";
    }
}

console.log(checkVal(17));


function compareEqulity(a,b){
    if (a == b){
        return true;
    }
    return false;
}

// strict equlity operator
function strictEqulity(a,b){
    if (a === b){
        return "Strict equlity" + true;
    }
    else{
        return false;
    }
}

console.log(compareEqulity(10,"10"));
console.log(strictEqulity(10,"10"));

