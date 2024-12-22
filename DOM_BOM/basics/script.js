console.log(`Hello webd`);
// window is the parent of all elements
// BOM
// location.href
// navigator.userAgent
// window.outerWidth

// console.log(document.firstChild.firstChild);
// console.log(document.getElementsByTagName("h1"));

//example 1 
// Fetch data and changed
let str = document.getElementById("changeText").addEventListener('click',function (){
    // Take input field values
    let tex = document.getElementById("textvalue").value;
    // takes element paragraph
    let para = document.getElementById("para1")
    // Changes the value of paragraph text
    para.textContent = tex;
        
})

// example 2
// Fetch data and changed the color
document.getElementById("highlightFirstCity").addEventListener('click',function(){
    let cities = document.getElementById("cities")
    cities.firstElementChild.classList.add("highlight"); 
})

// example 3
document.getElementById("changecoffeeType").addEventListener('click',function (){
    document.getElementById("coffeeType").innerText = "Expresso";
})

// example 4
// add html element
document.getElementById("additem").addEventListener('click',function()
{
    let tasklist = document.createElement('li')
    tasklist.textContent = "Rusk"
    let list = document.getElementById("shoppinglist").appendChild(tasklist)
})

// element 5


document.getElementById("delete").addEventListener('click',function()
{
    
    let list = document.getElementById("tasklist")
    let val = list.lastElementChild;
    document.getElementById("tasklist").removeChild(val)
    // console.log(val);
    
})

