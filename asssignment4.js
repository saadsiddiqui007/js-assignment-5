function greetUser(name) {
  return `Hello, ${name.toUpperCase()}! Nice to meet you.`;
}

let userName;
while (!userName) {
  userName = prompt('Please enter your name:');
}

alert(greetUser(userName));

// Define the isPrime function
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

const numb = prompt("Enter a positive integer:");

const numAsNumber = Number(numb);

if (isNaN(numAsNumber)) {
  alert("Invalid input. Please enter a positive integer.");
} else {
  if (isPrime(numAsNumber)) {
    alert(`${numb} is a prime number.`);
  } else {
    alert(`${numb} is not a prime number.`);
  }
}