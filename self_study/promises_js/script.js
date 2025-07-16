let promise = new Promise(function(resolve,reject) {
  alert("hello i am alert")
  resolve(56)
})


console.log("Hello 1");

setTimeout(() => {
  console.log("Hello 2");
  
}, 2000);

console.log("Hello 3");

console.log(promise); 

// OUTPUT
// hello i am alert
// Hello 1
// Hello 3
// Promise { 56 }
// Hello 2


// PROMISE used for parallel execution
// ex google se data fetch, api call, server se image fetch, etc sab ek sath hoga aur
//  alert karega ki hua ki nahi yeh sab type ke tasks ko alag alag karna ka koi 
// matlab nahi