console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?

// change i<4 to i<6
for (let i=0; i<6; i++) {
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

// change "let i=0; i<4" to "let i=3; i<6"
for (let i=3; i<6; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// change "let i=0; i<4; i++" to "let i=2; i<11; i+=2"
for (let i=2; i<11; i+=2) {
console.log(i)
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

// This starts your index at 5 instead of 0, i>=0 tells the condition to continue the loop until you reach 0 (your ending), and then i-- tells you to reduce the value by 1 meaning this is the part where it goes backward/countdown
for( let i=5; i>=0; i--){
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

for( let star of stars ){
  console.log(star);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let starPlacement = 0 // set the index to 0 or the start of your array
while ( starPlacement < stars.length ) { // you are going to continue through your list as long as your star placement is less than the length
  console.log(stars[starPlacement]) // It will log out the current star into your console
  starPlacement++; // How much you are incrementing your index by or the starPlacement to the next star and in this case we are doing it by one
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let numbers =0;
while( numbers<=5 ) {
  console.log(numbers);
  i++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let i=10 // you are setting your start
while( i>=5 ) { // you are seeting your end
  console.log(i); // tells you to describe each item (or the value) in your array 
  i--; // tells you how what direction and by how much to go by so in this case by one backwards or countdown
}