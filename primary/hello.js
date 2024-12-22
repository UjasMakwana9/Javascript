console.log("Hello !");

process.stdout.write("This will not break line")
process.stdout.write("--->This will not break line\n")

console.table({city:"Mumbai",taluka:"this"});
console.warn({city:"Mumbai",taluka:"this"});                    


let fname = "hello"
let mname = "world"

console.table([fname,mname])

function printMultiplicationTable(n) {
    let arr = [];
    for(let i=1;i<=10;i++)
    {
        let val = n * i;
        arr.push(String(n + " * " + i + " = " + val))
    }
  return arr;
}

console.log(printMultiplicationTable(5));