// logical AND operator
function testlogical(val){
    if (val <= 50 && val >= 10){
        return "YES";
    }
    return "NO";
}

console.log(testlogical(12));

/**  Logical Operator
 less than              <
 greater than           >
 less than equal to     <=
 greater than equal to  >=
 AND                    &&
 OR                     || 
 */

// kind of queue implementaion
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var arr = [1,2,3,4,5,6]

console.log("Before: " + JSON.stringify(arr));
nextInLine(arr,7);
console.log("After: " + JSON.stringify(arr));

