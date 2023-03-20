// 1. this is what is was doing
// 2. i didn't like doing it
// 3. here's how i tried to fix it
// 3. started freelancing
// 4. and now im here

/* 
- was always interested in coding.
- started with myspace.
- went to medical school.
- used coding to help me study better.
- hated studying with paper and pencil and reading so i used anki and customized my study notes and cards. I made it beautiful, and fun.
- after a while, i started to notice the abuse medical staff have to endure everyday from patients, family of patients, the hazing that is considered normal. I also didn't like how about half the time, we are awake for 48 hours, sometimes 72 hours at a time. I didn't feel right taking care of patients after staying awake for that long. yet we tell patients sleep is important.
- i decided to take a break from medical school. 
- during the break, I started freelancing.
*/





//100 hours project description. have simple using wireframe.cc, figma, or balsamiq or just draw it out


// document.querySelector("button").addEventListener("click", getFetch)

// function getFetch(){
//     const choice = document.querySelector("input").value
//     const url = `https://www.dnd5eapi.co/api/spells/${choice}`

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             document.querySelector("h2").innerHTML = data.name
//             document.querySelector("h4").innerHTML = data.subclasses[0].name
//             console.log(data.name)
//             console.log(data.subclasses)
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         })
// }



function EspressoMachine(make, model, color, cups){
    this.make = make
    this.model = model
    this.color = color
    this.cups = cups

    this.brew = function(){
        console.log("brew")
    }
    this.turn_on = function(){
        console.log("on")
    }
    this.clean = function(){
        console.log("clean me")
    }
}

let keurig = new EspressoMachine("keurig", "p90x", "red", 12)

console.log("hi")
console.log(keurig.brew)