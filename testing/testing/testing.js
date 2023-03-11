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


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)
        if(!localStorage.getItem('books')){
            localStorage.setItem('books', data.title)
        }else{
           let books = localStorage.getItem('books') + " ; " + data.title
           localStorage.setItem('books', books)
        }
          //put title into localStorage
          // let books = localStorage.getItem('books') + " ; " + data.title
          // localStorage.setItem('books', books)
        document.querySelector('h2').innerText = localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}