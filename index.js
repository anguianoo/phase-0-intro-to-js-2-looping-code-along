// Code your solutions in this file

// Usage: Use a for loop when you know how many times you want the loop to run
// (for example, when you're looping through elements in an array).

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

// WRRIT CARDS

function writeCards(names, eventName) {
  // create a new, empty array to hold the messages;
  let newArr = [];

  // iterate through the input array
  for (let i = 0; i < names.length; i++) {
    // inside the loop, build out the 'thank you' message for each name
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return newArr;
}

function countDown(n) {
  while (n > 0) {
    console.log(n);
    n -= 1;
  }
  console.log(n);
}
console.log(countDown(10));
