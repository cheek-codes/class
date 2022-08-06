// grassroots volunteer

//firsttimersonly.com

// outreach for volunteer work

//gitforwindows.org


// aka.ms/learnwithleon

/*
template bob boberson
https://cvcomplier.com
*/

//code for america


// As Fatty the Birb tries to fly South for the winter, he encounters some obstacles. Being so rotund, he has a hard time flying up, but will fall quickly due to gravity and his large mass as soon as he stops flapping his small wings. A new "Flappy Bird" type game.




/*
create an espresso machine constructor that
makes machines with 4 properties and 3 methods
*/

class Espresso_Machine {
    constructor(make, model, coffee_beans_lbs, drip_tray){
        this.make = make
        this.model = model
        this.coffee_beans_lbs = coffee_beans_lbs
        this.drip_tray = drip_tray
    }
    on(){
        console.log("Machine on")
    }
    off(){
        console.log("Machine off")
    }
    grind(){
        console.log("grind coffee")
    }
}

let fancy_machine = new Espresso_Machine("fancy", "top teir", 12, true)
let budget_machine = new Espresso_Machine("cheap", "cheapest one", 0, true)