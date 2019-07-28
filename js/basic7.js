// nested list of objects & there acess
var myStrObj = [
    {
        "car":{
            "model":{
                "name":"tiago",
                "j kam": undefined
            },
            "price":12000
        },
        "Truck":{
            "model":{
                "name":"tata",
                "j kam": undefined
            },
            "price":45000
        }
    },
    {
    'count':12
    }
];

var nameTruck = myStrObj[0].Truck.model.name;
console.log(nameTruck);