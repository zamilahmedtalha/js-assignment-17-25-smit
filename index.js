// Multi Array
let emptyMultiArray = [[], []];
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
console.log("multi array", matrix);









// 1 to 10 counting
console.log("Counting 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}





// multiply table maker
// Note: This will open two pop-up boxes in your browser for input
let tableNumber = prompt("Enter a number for the multiplication table:");
let tableLength = prompt("Enter the length of the table:");

console.log("Multiplication table of " + tableNumber + " (Length " + tableLength + ")");
for (let i = 1; i <= tableLength; i++) {
  console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}






// arrays
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Fruits printing arrays");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}








// counting series
console.log(" Series counting")

;




// Counting 1 to 15
let counting = "";
for (let i = 1; i <= 15; i++) {
  counting += i + (i < 15 ? ", " : "");
}
console.log("Counting " + counting);






//counting: 10 to 1
let reverse = "";
for (let i = 10; i >= 1; i--) {
  reverse += i + (i > 1 ? ", " : "");
}
console.log("Reverse counting " + reverse);




// Even 0 to 20
let even = "";
for (let i = 0; i <= 20; i += 2) {
  even += i + (i < 20 ? ", " : "");
}
console.log("Even counting " + even);





// Odd 1 to 19
let odd = "";
for (let i = 1; i <= 19; i += 2) {
  odd += i + (i < 19 ? ", " : "");
}
console.log("Odd: " + odd);



// Series 2k to 20k
let seriesK = "";
for (let i = 2; i <= 20; i += 2) {
  seriesK += i + "k" + (i < 20 ? ", " : "");
}
console.log("Series k counting " + seriesK);