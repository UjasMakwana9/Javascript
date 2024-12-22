// This is a single object
let car ={
    make : "Toyota",
    model : "Camry",
    year : "2020",
    get  :  function()
    {
        return `${this.make} is company`
    }
}
console.log(car.get());

// This is Constructor Funcution

function Animal(species)
{
    this.species = species;
    this.getdata = function ()
    {
        return `${this.species} is making sound`
    }
}

let cat = new Animal("cat")

console.log(cat);
console.log(cat.getdata());

//Prototype Chain  
Animal.prototype.getdaa = function()
{       
    return `AA bar no function chhe`
}   
console.log(cat.getdaa());


Array.prototype.change = function()
{
    return `Custom Array ${this}`
}
let arr = [1,2,3,4,5,6,7]
console.log(arr.change());

// New Journey Class
class Vehicles{
    constructor(make,models)
    {
        this.make = make;
        this.model = models
    }

    start()
    {
        return `${this.make} is a car made from ${this.model}`
    }
}

class cars extends Vehicles{
    drive()
    {
        return `${this.model} is a inheritance example`
    }
}

let newCar = new cars("TaTa","Corolla"); 
console.log(newCar.start());
console.log(newCar.drive ());

let newVehicle = new Vehicles("TaTa","Corolla"); 
console.log(newVehicle.start());
// console.log(newVehicle.drive());
