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

function Espresso_Machine(make, model, coffee_beans_lbs, drip_tray){
    this.make = make
    this.model = model
    this.coffee_beans_lbs = coffee_beans_lbs
    this.drip_tray = drip_tray

    this.on = function (){
        console.log("machine on")
    }
    this.off = function(){
        console.log("machine off")
    }
    this.grind = function(){
        console.log("grid coffee")
    }
}

let fancy_machine = new Espresso_Machine("fancy", "top teir", 10 , true)
let cheap_machine = new Espresso_Machine("cheap", "cheapest", 2, true)