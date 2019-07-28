// class with constructor 
class SpaceShuttle{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
};

var zeus = new SpaceShuttle('Jupiter') // craete object with new keyword
console.log(zeus.targetPlanet);

function makeClassV(){
    class Veg{
        constructor(name){
            this.name = name
        }
    }
    return Veg;
}

const Vegetable = makeClassV();
const carrot = new Vegetable('Carrot');
console.log(carrot.name);

// getter & setter 
// getter use to access class private variable to user without user directly accessing
// private variable & setter use to set private variable

function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9*(temp-32);
        }
        get temperature(){                  // getter
            return this._temp;
        }
        set temperature(updatedTemp){       // setter
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(72);
let temp = thermos.temperature; // getter can be accessed as property of class no need of ()
console.log(temp);
thermos.temperature = 26;       // setter
temp = thermos.temperature; 
console.log(temp);