const play = document.getElementById ("play")
const scoreDisplay = document.getElementById ("score")
// apply categories

const triviaCategories = [
  {
    genre: "COLOURS",
    questions: 
   [
      {
        question: "What is the name of the colour that is made by combining red and blue?",
        answers: ["Purple", "Torquoise", "Brown"],
        correct: "Purple",
        level : "easy",
      },
      {
        question: "What is the world's most popular favorite colour?",
        answers: ["Blue", "Green", "Red"],
        correct: "Blue",
        level: "medium"
      },
      {
        question: "What gives carrots their orange colour",
        answers: ["Breeding", "Caratenoids", "Oranges"],
        correct: "Caratenoids",
        level: "hard"
      }
    ]
  },

  {
    genre: "MOVIES",
    questions:
      [
      {
        question: "In The Matrix, what was the color of the pill that Neo takes?",
        answers: ["Pink", "Red", "Blue"],
        correct: "Blue",
        level: "easy",
      },
      {
        question: "What popular Wes Craven horror film series will be having its sixth movie released in 2023?",
        answers: ["Saw", "Halloween", "Scream"],
        correct: "Scream",
        level: "medium",
      },
      {
        question: "What movie features the line: “You can’t handle the truth!”?",
        answers: ["A Few Good Men", "Wolf on Wall Street", "Top Gun"],
        correct: "A Few Good Men",
        level: "hard"
      }
    ]
  },

  {
    genre: "SCIENCE",
    questions: 
   [
      {
        question: "What is a unit that measures force??",
        answers: ["Kelvin", "Newtons"," Ampere" ],
        correct: "Newtons",
        level: "easy"
       },
      {
        question: "What was the first planet discovered with the aid of a telescope?",
        answers: ["Uranus", "Pluto", "Mars"],
        correct: "Uranus",
        level: "medium"
      },
      {
        question: "Which part of the brain controls hunger?",
        answers: ["Hypothalamus", "Cerebrum", "Brainstem"],
        correct: "Hypothalamus",
        level: "medium"
      }
    ]
  },

  {
    genre: "FOOD AND DRINK",
    questions: 
   [
      {
        question: " What are the top two most popular spices in the world?",
        answers: ["Pepper and Mustard", "Oregano and Basil", "Turmeric and Cumin"],
        correct: "Pepper and Mustard",
        level: "easy"

      },
      {
        question: "What is used to make hummus",
        answers: ["Kidneybeans", "Chickpeas", "Avocados" ],
        correct: "Chickpeas",
        level: "medium",
      
      },
      {
        question: " How much caffeine needs to be taken out of coffee for it to be described as decaffeinated?",
        answers: ["At least 50%", "At least 65%", "At least 97%"],
        correct: "At least 97%",
        level: "hard"
      },
    ]
  },

  {
    genre: "ANIMALS",
    questions: 
   [
      {
        question: "What P word describes an animal’s tail with the ability to grip?",
        answers: ["Prehensive", "Prehentile", "Prehensile"],
        correct: "Prehensile",
        level: "easy"
      },
      {
        question: "Which insect is sometimes referred to as the devil’s darning needle?",
        answers: ["Mosquito", "Grasshopper", "Dragonfly"],
        correct: "Dragonfly",
        level:"medium"
      },
      {
        question: "What is stored in a camel’s hump",
        answers: ["Water","Juice", "Fat"],
        correct: "Fat",
        level: "hard"

      }
    ]
  },

  {
    genre: "GENERAL KNOWLEDGE",
    questions: 
   [
      {
        question: "What does it mean if a meeting is held “sub rosa”?",
        answers: ["At night", "Before dawn", "In secret" ],
        correct: "In secret",
        level: "easy"

      },
      {
        question: "How many dots are used in each letter in the Braille system?",
        answers: ["Six", "Three", "Five"],
        correct: "Six",
        level:"medium"

      },
      {
        question: "How many bones do we have in our ear?",
        answers: ["Five", "Two", "Three"],
        Correct: "Three",
        level:"hard"

      },
    ],
  },
]

//add categories

let score = 0

function  addCategory(category) {
const column = document.createElement ("div")
column.classList.add("genre-column")

const genreHeading = document.createElement("div")
genreHeading.classList.add("genre-heading")
genreHeading.innerText = category.genre

column.appendChild(genreHeading)
play.append(column)

category.questions.forEach (question => {
const card = document.createElement("div") 
card.classList.add ("card")
column.append (card)

  
  if (question.level === "easy"){
      card.innerHTML = 200
    
   }

   if (question.level === "medium"){
    card.innerHTML = 400
   }

   if (question.level === "hard"){
    card.innerHTML = 600
   }
   
   card.setAttribute ("data-question", question.question)

   card.setAttribute ("data-answer-1", question.answers[0] )

   card.setAttribute ("data-answer-2", question.answers[1] )

   card.setAttribute ("data-answer-3", question.answers[2] )

   card.setAttribute ("data-correct", question.correct)

   card.setAttribute ("data-value", card.getInnerHTML ())

   card.addEventListener("click", flipCard)

})
}
triviaCategories.forEach(category => addCategory(category))


function flipCard() {
  this.innerHTML = ""
  this.style.fontSize = "15px"
  this.style.lineHeight = "17px"
  const textDisplay = document.createElement ("div")
  textDisplay.classList.add ("card-text")
  textDisplay.innerHTML = this.getAttribute("data-question")
  document.createElement ("div").classList.add("card")
  const firstButton = document.createElement("button")
  const secondButton = document.createElement("button")
  const thirdButton = document.createElement("button")
  firstButton.classList.add("first-button")
  secondButton.classList.add("second-button")
  thirdButton.classList.add("third-button")
  firstButton.innerHTML = this.getAttribute ("data-answer-1")
  secondButton.innerHTML = this.getAttribute ("data-answer-2")
  thirdButton.innerHTML = this.getAttribute ("data-answer-3")
  firstButton.addEventListener("click", getResult)
  secondButton.addEventListener("click", getResult)
  thirdButton.addEventListener("click", getResult)
  this.append(textDisplay, firstButton, secondButton, thirdButton)

  const allCards = Array.from(document.querySelectorAll("card"))
  allCards.forEach(card => card.removeEventListener("click", flipCard)
    )
   }
  
  function getResult() {
    const allCards =Array.from(document.querySelectorAll(".card"))
    allCards.forEach(card => card.addEventListener ("click", flipCard))

    const cardOfButton = this.parentElement
  
  if (cardOfButton.getAttribute("data-correct") == this.innerHTML) {
  score = score + parseInt(cardOfButton.getAttribute("data-value"))
  scoreDisplay.innerHTML = score
  cardOfButton.classList.add("correct-answer")
  setTimeout(() => {
    while (cardOfButton.firstChild){
      cardOfButton.removeChild(cardOfButton.lastChild)
    }
    cardOfButton.innerHTML = cardOfButton.getAttribute ("data-value")
  }, 100)
  
  } else {
    cardOfButton.classList.add ("wrong-answer")
    setTimeout (() => {
      while (cardOfButton.firstChild) {
        cardOfButton.removeChild(cardOfButton.lastChild)
    }
    cardOfButton.innerHTML = 0

  }, 100)
}
cardOfButton.removeEventListener ("click", flipCard )
}


  



