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
//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = (100, 200, 300, 400, 500);
function numbersArray(array) {
  let total = 0;
  for (let i = 0; i < array.lenght; i++) {
    total += array[i];
  }
  if (total > 100) {
    console.log("Question 9: Total is over 100\n\n ", false);
    return false;
  } else {
    console.log("Question 9: Total is over 100\n\n ", true);
    return true;
  }
}
numbersArray(numbers1);
//I created an array and then looped through the array to add the total of elements, if the total is greater than 100 it should show true.
//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
let numbers2 = (20, 50, 70, 90);
function arrayOfNumbers(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
}
arrayOfNumbers(total);
console.log("Question 10: Average\n\n", total / arrayOfNumbers.length);
//I'm not sure why my console log is showing 38.5 from question 2.
//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
// let first = [50, 60, 70, 80];
// let second = [10, 20, 30, 40, 50];
// function twoArrays(array1, array2) {
//   sum = 0;
//   for (let i = 0; i < array1.length; i++) {
//     sum += array1[i];
//     let average1 = sum / array1.length;
//   }
//   sum2 = 0;
//   {
//     for (let i = 0; i < array2.length; i++) sum2 += array2[i];
//     let average2 = sum2 / array2.length;
//   }
//   if (average1 > average2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// twoArrays(first, second);
// console.log("Question 11: Is array1 greater and array2\n\n", twoArrays);
//I tried to created the average for the two arrays and then create an if statement to create a true of false statment but I wasnt able to get it to console log correctly. Its stating my average1 is undefined.
//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
  let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
  console.log("Question 12: Buy and Drink\n\n", buyDrink);
  return buyDrink;
}
willBuyDrink(true, 11);
willBuyDrink(true, 6);
//I created a function with the two parameters, is hotOutSide and moneyInPocket, then created a variable to determin if its hotOutSide is true and moneyInPocket is greater than 10.5 the retun is true.
//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created
function dayOfWeek(weekDay, weekEnd) {
  let wearJeans = weekDay === true && weekEnd === true;
  console.log("Question 13: Can I wear Jeans\n\n", wearJeans);
  return wearJeans;
}
dayOfWeek(true, true);
dayOfWeek(true, false);
//I created a function to determine if I can wear jeans based on if its a weekday or weekend. I tried to add the days of the week but I was having trouble.
