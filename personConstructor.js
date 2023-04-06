// // Person Constructor

// // Write a Person Constructor that initializes name and age from arguments.
// // All instances of Person should initialize with an empty stomach array.
// // Give instances of Person the ability to .eat("someFood"):
// // When eating an edible, it should be pushed into the stomach.
// // The eat method should have no effect if there are 10 items in the stomach.
// // When an instance poops, its stomach should empty.
// // Give instances of Person a method .toString():
// // It should return a string with name and age. Example: "Mary, 50"

// function Person(name, age){
//     this.name = name
//     this.age  = age
//     this.stomach = []
// }

// Person.prototype.eat = function(food, edible){
//     if(food && edible && this.stomach.length < 3){
//         this.stomach.push(food)
//     }
// }

// Person.prototype.poop = function(){
//     this.stomach.length = 0
// }

// Person.prototype.toString = function(){
//     return `${this.name}, ${this.age}`
// }

// const person1 = new Person("Mary", 50)
// console.log(person1.eat("cake", "edible"))
// console.log(person1.toString())
// console.log(person1.eat("apple", "edible"))
// console.log(person1.eat("apple", "edible"))
// console.log(person1.eat("apple", "edible"))
// console.log(person1.poop())