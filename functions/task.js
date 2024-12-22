// Array map provide to iterate the array and make changes and make new array  
const squareNumbers = (arr) => 
    {
        const squaredArray = arr.map((itr)=>itr * itr);   
        return squaredArray;
    };
console.log(squareNumbers([10,20]));

// Used Filter function to iterate and create shallow copy
const filterEvenNumbers = (arr) => {
    let count = [];
    arr.filter((itr)=>
    {
        if(itr%2==0)
            count.push(itr);
    });
    return count;
};
// For itereate and perform operations
const sumPositiveNumbers = (arr) => {
    let positiveArray = [];
        arr.filter((itr)=>
        {
            if(itr>=0)
                positiveArray.push(itr);
        });
      
    let sum = positiveArray.reduce((ac,itr)=>ac+itr,0);
    return sum;
};
// Map the object with name  property in the new array
let arr = [{name : "ujas",
    age : 18,
},{name : "sharad",age : 18,},{age : 18,}]
const getNames = (arr) => {
    const names = arr.map((itr)=>itr.name)
    return names;
};
console.log(getNames(arr))

// reduce its use 

const findLongestWord = (arr) => {
    let word = arr.reduce((ac,itr)=>{
        if(itr.length>ac.length || ac===null)
        {
            ac = itr;
        }
        return ac;
        
    },"");
    return word;
};

// map()
// Purpose: Transforms each element in an array and returns a new array with the same number of elements.
// Does not modify: The original array remains unchanged.
// When to Use:
// Use map when you want to transform each element of an array (e.g., converting data formats, applying a function to all elements).


// Purpose: Filters elements in an array based on a condition and returns a new array with only the elements that pass the condition.
// Does not modify: The original array remains unchanged.
// Use filter when you want to select a subset of elements from an array based on a condition.

// Purpose: Reduces the array to a single value (e.g., sum, product, object, or another array) by applying a callback function iteratively.
// Does not modify: The original array remains unchanged.
// Use reduce when you want to aggregate or summarize the array into a single value (e.g., total, average, max/min, or combined object).
