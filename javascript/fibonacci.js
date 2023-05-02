function fibonacci(num) {
  let n1=0, n2=1, next, i

  for (i=1; i<100; i++) {
       console.log(n1)
       next = n1 + n2
       n1 = n2
       n2 = next       
  }
}
fibonacci()
// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: 0");
//   console.log("=>", fibonacci(0));

//   console.log("");

//   console.log("Expecting: 1");
//   console.log("=>", fibonacci(2));

//   console.log("");

//   console.log("Expecting: 55");
//   console.log("=>", fibonacci(10));
// }

// module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
