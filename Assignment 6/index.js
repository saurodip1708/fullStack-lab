// Assignment 6: Explain Asynchronous and Synchronous Functions with Examples
// Synchronous example
console.log('Synchronous: Start');
for (let i = 0; i < 3; i++) {
  console.log('Synchronous:', i);
}
console.log('Synchronous: End');

// Asynchronous example
console.log('Asynchronous: Start');
setTimeout(() => {
  console.log('Asynchronous: Inside setTimeout');
}, 1000);
console.log('Asynchronous: End');
