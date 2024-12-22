function Person(name)
{
    this.name = name;
    
}

Person.prototype.addNew = function (){
    console.log(`Hello my name is ${this.name}`);
}
let ujas = new Person("ujas");
ujas.addNew();
