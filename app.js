function sayGreetingsCoffeeDrinker() {
   var coffee = prompt('Greetings Coffee Drinker!');
}
sayGreetingsCoffeeDrinker();

function sayWhichcoffeewouldyouliketotry() {
    var coffee = prompt('Which coffee would you like to try?');
    alert('fantastic choice:  ' + coffee + '!');
}
sayWhichcoffeewouldyouliketotry();

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

numberGuessingGame();