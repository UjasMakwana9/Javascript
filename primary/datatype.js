// Difference with var and let
// var:
// Function-scoped. A variable declared with var is accessible within the entire function it is declared in, even if it's declared inside a block (e.g., an if statement or a loop).
// let:
// Block-scoped. A variable declared with let is only accessible within the block it is declared in, including any nested blocks.

function example() {
    if (true) {
      var x = 10;
      let y = 20;
    }
    console.log(x); // 10
    // console.log(y); // ReferenceError: y is not defined
  }

  let num = 99
  let name = "This is a string"
  let isLoggedin = true

  let scaleType = ["Table Top","Oblang","Tray","Platfrom"]
  console.log(scaleType);
  console.log(scaleType[0]);
  console.log(scaleType[0][1]);

  let user = {firstname:"Ujas",lastname:"Makwana"}
console.log(user);