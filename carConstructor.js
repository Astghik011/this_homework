// Car Constructor

// Write a Car constructor that initializes model and milesPerGallon from arguments.
// All instances built with Car:
// should initialize with a tank at 0
// should initialize with an odometer at 0
// Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank. -
// STRETCH: Give cars ability to .drive(distance). The distance driven:
// Should cause the odometer to go up.
// Should cause the the tank to go down taking milesPerGallon into account.
// STRETCH: A car which runs out of fuel while driving can't drive any more distance:
// The drive method should return a string "I ran out of fuel at x miles!" x being odometer.

function Car (model, milesPerGallon){
    this.model = model
    this.milesPerGallon = milesPerGallon
    this.tank = 0
    this.odometer = 0
    this.max = 100
}

Car.prototype.fill = function(gallons){
    if(this.tank  + gallons < this.max){
         this.tank += gallons
    } 
    return `Your can only fill ${this.max - this.tank} gallons`
}

Car.prototype.drive = function(distance){
    let maxDistance = this.tank / this.milesPerGallon 
    let odometer =this.tank * this.milesPerGallon

    if(distance <= maxDistance){
        if(this.tank === 0 || distance * this.milesPerGallon){
            return "Your tank is empty. You can't drive any more. Please fill up your tank."
        } 
        return `${this.tank} gallons are left in your tank`
    }  
    return `I ran out of fuel at ${odometer} miles!`
}

const car1 = new Car("BMW", 5)
console.log(car1.fill(50))
console.log(car1.fill(20))
console.log(car1.drive(30))
