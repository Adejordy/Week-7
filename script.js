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
for (let i = 0; i < ages.length; i++) i++;
console.log(ages / [i]);
