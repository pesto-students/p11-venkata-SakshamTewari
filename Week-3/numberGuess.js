function playGuessingGame(num, num1){
    var totalGuess = num1;
    let count = 1;
    if(num1 == undefined)
        totalGuess = 10;
    let i = 1;
    while (i <= totalGuess){
        const guess = prompt("Enter a number between 0 to 100");
        console.log(guess);
        if(guess > num)
            console.log("Guess a smaller number");
        else if(guess < num)
            console.log("Guess a larger number");
        else if(isNaN(guess)){
            console.log("Enter a number");
            i--;
        }
        else if(guess == null)
            return 0;
        else    
            return i;
    i++;
    }
}
