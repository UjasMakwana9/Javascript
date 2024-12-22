// Asynchronous and event loop
setTimeout(()=>{
    console.log("Etle");
},5000)

console.log("Asyncronous Behaviour of js")
function test(){
    
    
    // This goes in the node to execute and then after it ends the event loop again start its exectuion
    setTimeout(()=>{
        console.log("Kya Pochi ya");
        
    },3000)

    console.log("inside the function");
    
}
test()

    for (let index = 0; index < 10; index++) {
    console.log(index);
}