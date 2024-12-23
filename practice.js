// // Try 1

// function example() {
//     var x = 10;
//     if (true) {
//         console.log(x); 
//         console.log(x);
//     }
//     console.log(x); 
//   }
//   example();
// // Output
// // 10
// // 10
// // 10

// // Try 2

// function example2() {
//     var x = 10;
//     if (true) {
//         let x = 400;
//         console.log(x); 
//         console.log(x); 
//     }
//     console.log(x); 
//   }
//   example2();

// //   Output
// // 400
// // 400
// // 10

// Try 3
function example3() {
     var x = 10;
    if (true) {
        console.log(x); 
        // This can overwrite
        var x = 1;
        console.log(x); 
    }
    console.log(x); 
  }
  example3();

// //   Output
// // 10
// // 1
// // 1

// // this means if same keyword then overwrite else give already declared error if within same scope 
// // in different scope overwrite all
// var c = 10
// var c = 99
// {

//     let c = 20
//     console.log(c);
// }
// console.log("example-main",c);

// // Try 4

// // function example4() {
// //     var x = 10;
// //     if (true) {
// //         // ReferenceError: Cannot access 'x' before initialization
// //             // if let is declare any where in the scope then that scope is of let 
// //         console.log(x); 
// //         let x = 20; 
// //         console.log(x); 
// //     }
// //     console.log(x);
// //   }
// //   example4();


// // Try 5

// function example5() {
//     var x = 10;
//     if (true) {
//         let  x; 
//         console.log(x);
//         x = 20;  
//         console.log(x); 
//     }
//     console.log(x);
//   }
//   example5();

// //   Output
// // undefined
// // 20
// // 10

// // Try 6

// function example() {
//     console.log(x);
//     if (true) {
//         console.log(x);
//         var x = 20; 
//         console.log(x); 
//     }
//     console.log(x); 
//   }
//   example();
// // var varibale the reference compile time e thai jai pan value insert runtime ee thai
// //   Output
// // undefined
// // undefined
// // 20
// // 20

// //// Try 7

// // function example() {
// //     // This becomes the global variable
// //     x = 30; 
// //     console.log(x);
// //     if (true) {
// //       let x;  
// //       console.log(x);
// //       x = 40;
// //       console.log(x); 
// //     }
// //     console.log(x); 
// //   }
// //   example();
// //   console.log(x);


// ////Try 8

// function example() {
// //     global variable can be overwrite by any in same scope
//     x = 30; 
//     console.log(x);
//     if (true) {
//       let x;  
//       console.log(x);
//       x = 40;
//       console.log(x); 
//     }
//     var x = 100;  

  
//     console.log(x); 
// }
//   example();
// //   console.log(x);
// //   30
// //   undefined
// //   40
// //   100