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
