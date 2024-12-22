/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];


/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
 ]zment in the array and store it in a variable named `favoriteCity`.
*/
let cities = ["London","Tokyo","Paris","New York"];
let favoriteCity = cities[2];


/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbal tea","white tea","masala chai"];
teaTypes[1] = "jasmine tea";
/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited = ["Mumbai","Sydney"];
citiesVisited.push("Berlin");


/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai","iced tea","matcha","earl grey"];
teaOrders.pop();
/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
popularTeas = ["green tea","oolong tea","chai"];
let softCopyTeas = popularTeas;
// object are reference type so if we change the value of softCopyTeas it will also change the value of popularTeas
console.log(softCopyTeas);
console.log(popularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
Create a hard copy of this array named `hardCopyCities`.
*/
topCities = ["Berlin","Singapore","New York"];
let hardCopyCities = [...topCities];
// Hardcopy is created so if we change the value of hardCopyCities it will not change the value of topCities
topCities[0] = "Mumbai";
console.log(topCities);
console.log(hardCopyCities);


/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["Paris","Rome"];
let asianCities = ["Tokyo","Bangkok"];
let worldCities = europeanCities.concat(asianCities);
/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu = ["masala chai","oolong tea","green tea","earl grey"];
let menuLength = teaMenu.length;

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketList = ["Kyoto","London","Cape Town","Vancouver"];
let isLondonInList = cityBucketList.includes("London");