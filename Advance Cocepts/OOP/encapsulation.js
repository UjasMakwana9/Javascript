class bankAccount {
    #balance = 0;

    deposit(amount)
    {
        this.#balance += amount;
        return this.#balance;
    }
    withdraw(amount)
    {
        this.#balance -= amount;
        return this.#balance;
    }
    transcation(amount)
    {
        this.deposit(amount)
        this.withdraw(amount)
        return this.#balance
    }
}

let customer = new bankAccount();
let val = customer.deposit(500)
// console.log(customer.#balance);
console.log(customer.transcation(1000));

// Polymorphism
class Bird{
    fly()
    {
        return `Birds can fly`
    }
    // No function overloading in js
    // fly(wings)
    // {
    //     return `${wings} wings is the reson way they fly`
    // }
}
class Penguin extends Bird
{
    fly()
    {
        return `Peguins cannot fly`
    }
}
let sparrow = new Bird();
console.log(sparrow.fly());

let peg = new Penguin();
console.log(peg.fly());

// static method

class Calculator{
    static add(a,b)
    {
        return a+b;
    }
}

console.log(Calculator.add(99,8));



// Getters and Setters
class Employee
{
    #salary = 0;
    constructor(name , salary)
    {
        this.name = name
        // this needs to be underscore because it has special methods getter and setter
        if(salary<0)
        {
            throw new Error("HU tane su kaam paisa apu")
        }
        else
            this.#salary = salary
    }

    // set salary(amt)
    // {
    //     this.salary = amt;
    // }
    get salary()
    {
        // console.log(`${this.#salary} is the salary of the ${this.name}`);
        return "Salary nu tare su kaam chhe";
    }
    set salary(value)
    {
        if(value < 0)
            console.error("Salary cannot be negative")
        else
            this.#salary = value
    }
}

let man = new Employee("ujas",1000);
// We cannnot access direact the salary because we have used the #salary
// console.log(man._salary);

//This calls the setter method 
man.salary = 70000

// This calls the getter method
console.log(man.salary);

