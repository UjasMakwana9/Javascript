// This is a constructor funciton
function car (companyName,name,fuel) {
    this.companyName = companyName
    this.name = name
    this.fuel = fuel
// This work inside class
    this.getRC = ()=>{
        return `Your car ${this.name} of company ${this.companyName} is of fuel type ${this.fuel}`
    };
}

let car1 = new car("TaTa","Vista","Disel")
console.log(car1);

let car2 = new car("Range Rover","r12","CNG")
// I am able to change the value using the object
car2.fuel="Petrol"
console.log(car2);

// If i want to fetch the detail using construction function
console.log(car2.getRC());
// The issue lies in how the addnew function is defined within the car.prototype. Specifically, arrow functions (=>) do not have their own this context; instead, they inherit this from the surrounding lexical scope. When you define addnew as an arrow function in the prototype, it does not bind to the instance of the car object, causing placeholders like this.name to be undefined.
// car.prototype.addnew = ()=>{
//     return `Your car ${this.name} of company ${this.companyName} is of fuel type ${this.fuel}`
// };
car.prototype.addnew = function () {
    return `Your car ${this.name} of company ${this.companyName} is of fuel type ${this.fuel}`
};

console.log(car2.addnew());

function Animal (species){
    if(!new.target)
    {
        // console.log("Called with the new keyword");
        throw new Error("Please call with new keyword");
    }
    this.species = species
};
let cat = new Animal("Bhuri");
console.log(cat);





