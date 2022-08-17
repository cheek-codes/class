/*
create a class and extend it
*/

class Animal{
    constructor(name){
        this.name = name
    }
    get name(){
        return this.name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
    get breed(){
        return this.breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }
}

class Cat extends Animals{
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


let simba = new Dog("simba", "pitbull")
let salem = new Cat("salem", "black cat")

let farm = [simba, salem]

for (a of farm){
    a.speak()
}