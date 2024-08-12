// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let random = "okay"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
let letter = prompt("Guess a letter: ")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (random.includes(letter)) {
  console.log("The letter is in the word! ")
} else {
  console.log("The letter is not in the word... ")
}

// Prompt the user to guess the word 
let word = prompt("Guess the word: ")

// Increase attempts by 1
attempts++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (word == random) {
  console.log("You guess the word!")
} else {
  console.log("You did not guess the word. ")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
// In the while loop, copy the prompt and if/else check for the word
// In the while loop, copy the attempts increment
let random2 = "okay"
let attempts2 = 0
let condition = false

while (!condition) {
  let letter = prompt("Guess a letter: ")
  if (random2.includes(letter)) {
    console.log("The letter is in the word! ")
  } else {
    console.log("The letter is not in the word. ")
  }

  let word = prompt("Guess the word: ")
  if (word == random) {
    console.log("You got the word!")
    condition = true
  } else {
    console.log("You did not guess the word. ")
  }
  attempts2++
}

// After the while loop, print "It took (attempts) attempts" 
console.log(`It took ${attempts2} attempts. `)