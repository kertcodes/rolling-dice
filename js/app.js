/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/


//Declare a function to simulate rolling a dice (random # btwn 1 - 6)
function randomDie(){
  return Math.floor(Math.random() * 6) + 1
}

/*
let random1 = randomDie()
let random2 = randomDie()

console.log(`first die: ${random1}`)
console.log(`second die: ${random2}`)
*/

//listen for click event
//getElementById grabs the element from the HTML file, in this case, the RollDice button
//onClick listens for click events
document.getElementById("roll-dice").onclick = rollDice

function combineDie(rando){
  return `dice-${rando}`
}

function rollDice(){
  console.log('dice is rolled')
  random1 = randomDie()
  random2 = randomDie()
  console.log(`first die: ${random1}`)
  console.log(`second die: ${random2}`)

  //dynamically update html with new dice class (gives you new images)
  document.getElementById("first-die").className = combineDie(random1)
  document.getElementById("second-die").className = combineDie(random2)
}
