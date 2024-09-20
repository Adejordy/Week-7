/* 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age. */

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(
  "Question 1: Subtract first from last \n\n",
  (ages[0] -= ages.length - 1)
);
//I used the subtraction assignment found on mdn web docs to accomplish this.
ages.push(16);
console.log("Question 1 A: Add new age to array\n\n", ages);
//I used the push method to add age 16 to the array
console.log(
  "Question 1 B: Subtract new array \n\n",
  (ages[0] -= ages.length - 1)
);
//I'm not sure why is goes in (()), when I saved the first time it added them so I added them again to the second run
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
console.log("Question 1 C: Average age\n\n", sum / ages.length);
// I create var for sum to equal 0 then added ages[i] to add the total ages together and console loged the result to divide the sum to the ages.length
/*2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let total = sum / names.length;
for (let i = 0; i < names.length; i++);
console.log("Question 2 A: Average of letters\n\n", total);
for (let i = 0; i < names.length; i++) {
  console.log("Question 2 B: concat names\n\n", names.join(" "));
}
//I used the .joint with a space between the ""
//3. How do you access the last element of any array?
//Answer: by using arrayname.pop(), or .length -1
let arrayLength = ["First", "Middle", "Last"];
{
  console.log("Question 3: Last in array\n\n", arrayLength.pop());
}
//4. How do you access the first element of any array?
//Answer: arrayname.shift or [0]
arrayLength = ["First", "Middle", "Last"];
{
  console.log("Question 4: first in array", arrayLength.shift());
}
//TODO 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//TODO 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
//TODO 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
//TODO 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
//TODO 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
//TODO 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
//TODO 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//TODO 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//TODO 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created
