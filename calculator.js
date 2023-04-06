// // Calculator Constructor

// // Create functions for the Calculator class that can do the following:
// // Add two numbers.
// // Subtract two numbers.
// // Multiply two numbers.
// // Divide two numbers.

// function Calculator(){
// }

// Calculator.prototype.add = function(num1, num2){
//     try{
//        if( typeof num1 === "number" && !(isNaN(num1)) 
//        && typeof num2 === "number" && !(isNaN(num2)) ){
//         return num1 + num2
//        } 
//        throw new TypeError("Input numbers")
//     } catch(error){
//          return error.name
//     }
// }

// Calculator.prototype.subtract = function(num1, num2){
//         try{
//     if( typeof num1 === "number" && !(isNaN(num1)) 
//     && typeof num2 === "number" && !(isNaN(num2)) ){
//         return num1 - num2
//        } 
//        throw new TypeError("Input numbers")
//     } catch(error){
//          return error.name
//     }
// }

// Calculator.prototype.multiply = function(num1, num2){
//     try{
//         if( typeof num1 === "number" && !(isNaN(num1)) && typeof num2 === "number" && !(isNaN(num2)) ){
//          return num1 * num2
//         } 
//         throw new TypeError("Input numbers")
//      } catch(error){
//           return error.name
//      }
// }

// Calculator.prototype.divide = function(num1, num2){
//     try{
//         if( typeof num1 === "number" && typeof num2 === "number" ){
//          return num1 / num2
//         } 
//         throw new TypeError("Input numbers")
//      } catch(error){
//           return error.name
//      }
// }

// const calculator = new Calculator();  

// console.log(calculator.add(10, 5)); 
// // console.log(calculator.add(10, "5"));
// console.log(calculator.subtract(10,5)); 
// console.log(calculator.multiply(10, NaN)); 
// console.log(calculator.divide(10,5)); 


