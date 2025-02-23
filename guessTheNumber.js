;(function (){
let randomNumber = Math.round(Math.random () *100)
console.log(randomNumber)
const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const userGuess = document.querySelector('.all-guesses')
const submit = document.querySelector('.submit-btn')
const startGame = document.querySelector('.start-game')
let remainingGuess = document.querySelector('.remainingGuess')
let userGuessArray = []

let value = 10
remainingGuess.innerHTML = `You have ${value} attempts left`


form.addEventListener('submit', function (e){
    e.preventDefault()
    let userInputValue = parseInt(userInput.value)
    if (userInputValue < randomNumber){
        result.innerHTML = "Too Low!" 
    } else if (userInputValue > randomNumber){
        result.innerHTML = "Too High!"
    } else {
        result.innerHTML = "Congratulations, you guessed the right number!"
        startGame.disabled = false
        submit.disabled = true 
    }
    if (value > 0){
         value = value - 1
        remainingGuess.innerHTML = `You have ${value} attempts left`
    }else {
        submit.disabled = true
        startGame.disabled = false 
    }
    if (userInputValue === randomNumber){
        remainingGuess.innerHTML = ''
    }
   
    userGuessArray.push(userInputValue)
    userGuess.innerHTML = "Your guesses are : " + userGuessArray.join(', ')
    form.reset()
})
 startGame.addEventListener('click', function (){
    result.innerHTML = ''
    userGuess.innerHTML  = ''
    startGame.disabled = true
    submit.disabled = false
    randomNumber = Math.round(Math.random () *100)
    userGuessArray = []

 })

 
})()
