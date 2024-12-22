let computer = {
    cpu : "i9",
    dislay : "4k "
}
let dell = {
    // This inherits all the property of the computer object adf
    __proto__ : computer,
    ram : 64,

}
// It shows custom property that are added
console.log("computer",computer.__proto__);
console.log("dell Laptop",dell.__proto__);

let genericCar = {
    tyre : 4,
}
let tesla = {
    type : "auto car",
}
// This inherits the property of genericCar to the tesla
Object.setPrototypeOf(tesla,genericCar)

// This gets property of the object (only shows the inherited property) 
console.log("Tesla",Object.getPrototypeOf(tesla));

// This check if first parameter (object) has particular property its own or inherited
// true if its owns 
// false if its inherited
console.log("Tesla",Object.hasOwn(genericCar,"tyre"));
// Output : True

console.log("Tesla",Object.hasOwn(tesla,"tyre"));
// Output : False

