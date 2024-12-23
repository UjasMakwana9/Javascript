function createCounter() {
    counter = 0;
    return function()
    {
        this.counter++;
        return this.counter;
    }
}


let fun = createCounter()

console.log(fun());
console.log(fun());
console.log(fun());