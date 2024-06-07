//1.  higher order array methods like map filter reduce.
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});

document.write(`The final value in a array is ${doubled}` +"<br>");

//filter

const numbers1 = [1, 2, 3, 4, 5,6,7,8,9,10,12,13,14,15,16,17];


const evenNumbers = numbers1.filter(function(num) {
    return num % 2 === 0;
  });
  
  document.write(`Even numbers in given array is ${evenNumbers}`+"<br>")



  //reduce
  const numbers3= [1, 2, 3, 4, 5];
  const sum = numbers3.reduce(function(accumulate,value) {
  return accumulate + value;
  }, 0);

  document.write(`The accumulated value of given array is ${sum}`+"<br>")


  //Higher order funcytion
  function multiplication(multi) {
    const value = multi(); // Call the passed-in function and store the result
    return value; // Return the result to the caller
}

let parentValue = multiplication(function multi() {
    return 10 * 5; // Perform multiplication and return the result
});

console.log(parentValue); // Output: 50





//example 2
function applyOperation(numbers,operation){
  return operation(number);

}
function doubled1(x){
  return x*2;
  

}
function thriple(x){
  return x*3;

}
const number=5;
const doubleNumber=applyOperation(number, doubled1);
const thriplenumber=applyOperation(number, thriple);
console.log(doubleNumber);
console.log(thriplenumber);