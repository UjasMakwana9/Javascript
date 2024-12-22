let i = 5
let arr = []
while(i)
{
    arr.push(i)
    i--
}
console.log(arr);

// let teaCollection = []
// let tea ;
// do
// {

//     tea = prompt('Enter the tea : ');
//     teaCollection.push(tea)
// }while(tea!=="stop");

let j = 1;
let sum = 0;
do
{
    sum += j;
    j++;
}while(j<=3);
console.log(sum);

// Multiply all elements in the array by 2 and store it in a new array
let arr1 = [1,2,3,4,5];
let newarr = [];
for(let i=0;i<arr1.length;i++)
{
    newarr.push(arr1[i]*2);
}
console.log(newarr);

// Copy one array to another
let cities = ["Mumbai","Pune","Delhi","Bangalore","Chennai"];

let newCities = [];

while(cities.length)
{
    newCities.push(cities.shift());
}
console.log(newCities);