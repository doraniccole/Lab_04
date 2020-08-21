function sayGreetingsCoffeeDrinker() {
   var name = prompt('Greetings Coffee Drinker! What is your name? ');
   alert('Nice to meet you, ' + name + '.');
}
sayGreetingsCoffeeDrinker();


function sayKindOfCoffee() {
    var coffee = prompt('What kind of coffee do you like?');
    alert(coffee + ' is a fantastic choice!');
}
sayKindOfCoffee();

function oldEnough() {
    var age = prompt("How old are you?"); 
    if (age < 15) {
        alert('Wait a few years to enjoy coffee.');
    } else if (age > 65) {
        alert('Try decaf.');
    } else if (age >= 15 && age <= 65) {
        alert('Drink responsibly and enjoy!');
    }
}

oldEnough();

// if under 15 wait a few years
// if over 65 try decaf
// otherwise drink responsibly


function numberGuessingGame() {
    var correctAnswer = 37;
var playGame = prompt('Do you want to play a game?');
while(playGame === 'yes'){
    for (var i= 0; i < 5; i = i + 1) {
        var userGuess = parseInt(prompt("Please Enter a number 1-100"));
        if(userGuess === correctAnswer){
            alert('You guessed correct!')
            break;
        } else if (userGuess < correctAnswer){
            alert('You guessed too low')
        } else if (userGuess > correcrAnswer){
            alert('You guessed too high')
        }
if(i === 4) {
    alert('The correct answer is ' + correctAnser);
}
        }
        playGame = prompt('Do you want to play another game?');
    }
}
