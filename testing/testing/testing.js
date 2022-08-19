/*
create a class and extend it
*/

class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }
}

class Cat extends Animal{
    constructor(name, breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }
}

class Bird extends Animal {
    constructor (name, color){
        super(name)
        this.color = color
    }
    speak(){
        super.speak()
        console.log(`${this.name} chirps`)
    }
}


let simba = new Dog("simba", "pitbull")
let salem = new Cat("salem", "black cat")
let sapphire = new Bird("sapphire", "blue")

let farm = [simba, salem, sapphire]

for (a of farm){
    a.speak()
}

console.log(farm)