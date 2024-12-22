// Iterate till found the specific word in array and then break and store in another array
let chais = ["masala","ginger","cardamom","jasmine","chai","earl grey","matcha"];
let newChais = [];
for(let i = 0;i<chais.length;i++)
{
    if(chais[i]==="chai")
    {
        break;
    }
    newChais.push(chais[i]);
}
// console.log(newChais);
// Iterate the array and skip the specific element 
let cites = ["Somnath","Bagadana","Jamnagar","Porbandar","Amreli","Paris","Thavi"];
let newcites = [];
for(let i = 0;i<cites.length;i++)
{
    if(cites[i]==="Paris" || cites[i]==="paris")
    {
        continue;
    }
    newcites.push(cites[i]);
}
// console.log(newcites);

// For of loop
let numbers = [1,2,3,4,5,6,7]
let res = []; 
for (const num of numbers) {
    if(num === 4)
    {
        break;
    }
    res.push(num)
}
// console.log(res)

// For In loop

let cityPopulation = {
    "London" : 1000000,
    "Paris" : 1200000,
    "USA" : 9000000,
    "India" : 1110000,
    "China" : 2300000,
    "Australia" : 990000,
}
let newCityPopulation = {};
for (const key in cityPopulation) {
if(key == "India")
{
    break;
}
    newCityPopulation[key]=(cityPopulation[key])
}
// console.log(newCityPopulation)

// Other question
newCityPopulation2 = {};
for (const key in cityPopulation) {
    
    if(cityPopulation[key]<=1110000)
        {
            continue;
        }
        newCityPopulation2[key] = cityPopulation[key];
}
    // console.log(newCityPopulation2)


// for each loop 
// break the loop when his chai keyword and store all element before it to new array
let chai = ["masala","ginger","cardamom","jasmine","chai","earl grey","matcha"];
let extra = [];
let flag = false;
chai.forEach(key=> {
    if (flag)  return;
    if(key === "chai")
    {
        flag = true;
        return;
    }
    extra.push(key)
});
// function name()
// {
// }
// is similar to ()=>{}
// console.log(extra);
// If in the above example we not ue flag it becomes skip example


// Question 9
let array = [2,5,7,9]
let doubledNumber = [];

for(let i=0;i<array.length;i++)
{
    if(array[i]===7)
    {
        continue;
    }
    doubledNumber.push(array[i]*2)
}
// console.log(doubledNumber);

// 10. use for of loop 
let extra2 = []

for (const index of chai) {
    if(index.length>6)
        break;
    extra2.push(index)
}
// console.log(extra2);

// 11. Difference between for of and for in loop
num1 = [1,2,3,4,5,6,7,8]
num2 = [[11,12,13,14],[21,22,23,24]]
// this iterate over the keys 
for (const key in num1) {
    console.log(key + "-->" + num1[key])
}
// this iterate over the values 
for (const element of num1) {
    console.log(element);
}

// For objects
obj1 = {
    name : "MotaLuhar",
    gam : "MotaJinjuda",
    kaam : "Mota",
}   

// for (const element of num2) {
//     console.log(element)
// }

for (const key in obj1) { 
    console.log(key + " --> " + obj1[key] )
}