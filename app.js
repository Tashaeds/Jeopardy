const play = document.getElementById ("play")
const score = document.getElementById ("score")
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
        level :"easy",
      },
      {
        question: "What is the world’s most popular favorite colour?",
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
        answers: ["A few good men", "Wolf on Wall Street", "Top Gun"],
        correct: "A few Good men",
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
        answers: ["At night", "Before dawn", "In secret",  ],
        correct: "In Secret",
        level: "easy"

      },
      {
        question: "How many dots are used in each letter in the Braille system?",
        answers: ["Six", "Three", "Five"],
        correct: "Six",
        level:"medium"

      },
      {
        question: "What (a) is the act of washing clean?",
        answers: ["Abolition", "Arbitration", "Ablutions"],
        Correct: "Ablutions",
        level:"hard"

      },
    ],
  },
]

//add categories
function  addCategory(category) {
const column = document.createElement ("div")
column.classList.add("genre-column")

const genreHeading = document.createElement("div")
genreHeading.classList.add("genreheading")
genreHeading.innerHTML = category.genre


column.appendChild(genreHeading)
play.append(column)
}
 
  category.questions.forEach(question =>{
   const card = document.createElement(div) 
   card.classList.add ("card")
   column.append (card)

   if (question.level === "easy"){
    card.innerHTML = 200
   }

   if (question.level === "medium"){
    card.innerHTML = 400
   }

   if (question.level ==="hard"){
    card.innerHTML = 600

// add questions, answers and scores to the game
    card.setAttribute ("data-question", question.question)
    card.setAttribute ("data-answer 1", question.answers[0])
    card.setAttribute ("data-answer 2", question.answers[1])
    card.setAttribute ("data-answer 3", question.answers[2])
    card.setAttribute ("data-correct", question.correct)
    card.setAttribute ("data-value", card.getInnerHTML ())
    }})
    
    card.addEventListener("click", flipcard )

    triviaCategories.forEach(category => addCategory(category))

    
