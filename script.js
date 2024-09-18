/* 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age. */

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log((ages[0] -= ages.length - 1));
//I used the subtraction assignment found on mdn web docs to accomplish this.
ages.push(16);
console.log(ages);
//I used the push method to add age 16 to the array
console.log((ages[0] -= ages.length - 1));
//I'm not sure why is goes in (()), when I saved the first time it added them so I added them again to the second run
//FIXME /* I'm not sure how to find the average age/ coming back to this part of the question:for (let i = 0; i < ages.length; i++) i++; console.log(ages / [i]);

/*2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//FIXME calculate the average number of letters
for (let i = 0; i < names.length; i++) {
  console.log(names.join(" "));
}
