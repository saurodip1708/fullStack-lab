// Assignment 1: Demonstrate variables, functions, conditionals, loops, objects, arrays, and asynchronous code in Node.js
// 1. Variables
let name = 'Alice';
let age = 22;
const isStudent = true;

// 2. Functions
function greet(person) {
  return `Hello, ${person}!`;
}

// 3. Conditionals
if (age >= 18) {
  console.log(`${name} is an adult.`);
} else {
  console.log(`${name} is a minor.`);
}

// 4. Loops
console.log('Counting from 1 to 5:');
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5. Objects & Arrays
const student = {
  name: 'Alice',
  age: 22,
  courses: ['Math', 'Science', 'English']
};
console.log('Student object:', student);
console.log('Courses:');
student.courses.forEach(course => console.log(course));

// 6. Asynchronous Code
// Callback
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback('Data loaded (callback)');
  }, 1000);
}
fetchDataCallback(data => console.log(data));

// Promise
function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data loaded (promise)');
    }, 1000);
  });
}
fetchDataPromise().then(console.log);

// Async/Await
async function fetchDataAsync() {
  const data = await fetchDataPromise();
  console.log('Data loaded (async/await):', data);
}
fetchDataAsync();
