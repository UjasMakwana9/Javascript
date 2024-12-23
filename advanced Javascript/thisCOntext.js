let obj = {
    name : "ujas",
    greet()
    {
        return `hello, this is ${this.name}`
    },
};
// Here we are accessing the direct through object thus context is not lost
// console.log(obj.greet());

let variable = obj.greet;
console.log(variable());

// Now if we want to bind the context
let bound = obj.greet.bind({name : "sharad"})
console.log(bound())