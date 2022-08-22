//come up with a parent class
//extend that arent class into 2 children
//use encapsulation, abstraction, inheritance and polymorphism

class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    introduce(){
        console.log(`Hi, my name is ${this._name} and I'm a ${this._role} developer`)
    }
}

class Front extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    introduce(){
        super.introduce()
        console.log(`I work with ${this._tech}`)
    }
}

class Back extends Front{
    constructor(name, role, tech){
        super(name, role, tech)
    }
    introduce(){
        super.introduce()
    }
}

let sandy = new Back("Sandy", "back-end", "node")

let liam = new Front("liam", "front-end", "react")

let agency = [sandy, liam]

for (person of agency){
    console.log(person.name)
}
















// class Contractor{
//     constructor(name, role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }

// class Front extends Contractor{
//     constructor(name, role, tech){
//         super(name, role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs! And I use ${this._tech}`)
//     }
// }

// class Back extends Contractor{
//     constructor(name, role, tech){
//         super(name, role)
//         this._tech =tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs! And I use ${this._tech}`)
//     }
// }

// let bob = new Contractor("Bob", "front-end")
// let simba = new Front ("simba", "front-end", "react")
// let machi = new Back ("machi", "back-end", "node")

// let agency = [bob, simba, machi]

// for(person of agency){
//     person.sayHello()
// }