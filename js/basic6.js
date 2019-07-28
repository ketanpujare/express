// switch statement // switch uses strict equality operator
function caseInSwitch(val){
    var ans = "";
    switch(val){
        case 1:
            ans = "alpha";
            break;
        case 2:
            ans = "Beta";
            break;
        case 3:
            ans = "Gamma";
            break;
        case 4:
            ans = "Delta";
            break;
        default:
            ans = "stuff";

    }
    return ans;
}

console.log(caseInSwitch(30));

// dictonary in javascript refers as object
var testObj = {
    'name':'Ketan',
    'age':25,
    'lang':['python','javascript','html','css'],
    'know lib':['django','flask','scrapy']
};

var name = testObj.name; // using dot notation
var name = testObj['name']; // using braket notation
var lang = testObj.lang;
var known_lib = testObj['know lib']; // need to use braket notation if property has "space" in it


console.log(name,lang,known_lib);

 testObj.name = "mahesh"; //this changes value in object to 
 console.log(testObj);
 
 testObj.weight = 67; //add property in object
 console.log(testObj);
 
 delete testObj.age; //delete property from object
 console.log(testObj);
 
 var propertyPresent = testObj.hasOwnProperty("name"); // check if property present in object
 console.log(propertyPresent);