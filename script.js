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
  console.log("Question 4: first in array\n\n", arrayLength.shift());
}
//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
  console.log("Question 5: Length of names\n\n", nameLengths);
}
//I created a new array and then a for loop to iterate though. I pushed the new array to get the lenght of each name.
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let totalCharacters = 0;
for (let i = 0; i < nameLengths.length; i++) {
  totalCharacters += nameLengths[i];
}
console.log("Question 6: Total Charaters\n\n", totalCharacters);
//I created a new array and a loop to go through the previous array and used ther += to add the elements together to get the total.
//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function multiple(word, n) {
  return word.repeat(n);
}
console.log("Question 7: Multiple return\n\n", multiple("Hello, ", 5));
//I used .repeat in my return and assigment that to n, in my console log I called my function name and had it repeat 5 tiemes. I added a , and space to separate the a little to make reading easier.
//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
  console.log("Question 8: Name return\n\n", `${firstName} ${lastName}`);
}
fullName("Alyssa", "Dejordy");
//I created the function for full name and added the two parameters first and last name, from there I used template literals for the information in the console log and to return with out a space. I added my name to be returned
//FIXME 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers = (100, 200, 300, 400, 500);
function numbersArray(array) {
  let total = 0;
  for (let i = 0; i < numbers.lenght; i++) {
    total += numbers[i];
  }
  if (total > 100) {
    console.log("Question 9: ", true);
    return true;
  } else {
    console.log("Question 9: ", false);
    return false;
  }
}
console.log("Question 9: ", total);

//TODO 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
// function arrayOfNumbers(20, 50, 70, 90){
//   for (let i = 0, i < arrayOfNumbers.length; i++)
// }
//TODO 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//TODO 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// function willBuyDrink(isHotOutside, moneyInPocket){
//   if (isHotOutside > 90);
//   return true;
// }else

//TODO 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created
