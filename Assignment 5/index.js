// Assignment 5: Calculate the Execution Time of Multiple Functions
function slowFunction() {
  for (let i = 0; i < 1e7; i++); // Simulate work
}
function fastFunction() {
  for (let i = 0; i < 1e5; i++); // Simulate work
}
console.time('slowFunction');
slowFunction();
console.timeEnd('slowFunction');
console.time('fastFunction');
fastFunction();
console.timeEnd('fastFunction');
