// Baby Constructor

// Write a Baby constructor subclassing Person.
// Besides name and age, Baby takes a third argument to initialize favoriteToy.
// Besides the methods on Person.prototype, babies have the ability to .play():
// Should return a string "Playing with x", x being the favorite toy.

function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.bio = function(){
    console.log(`${this.name} is ${this.age} years old.`)
}

function Baby(name, age, favouriteToy){
    Person.call(this, name, age)
    this.favoriteToy = favouriteToy
}

Baby.prototype.play = function(){
    console.log( `${this.name} is playing with a ${this.favoriteToy}.`)
}
const person1 = new Person("Astghik", 32)
const baby1 = new Baby("Samvel", 1, "ball")
person1.bio()
baby1.play()
