const game = {
    lives : 3,
    coins : 0,
    

    points : function(){
        return this.coins * 10;
    },

    playerDies : function(){
        if(this.lives > 0)
            this.lives -= 1;
    },
    
    newGame : function(coins,lives){

        if(lives !== undefined)
            this.lives = lives;
        if(coins !== undefined)
            this.coins = coins;
    }
}


let gameObj1 = game;
gameObj1.newGame();
console.log(gameObj1.lives);
console.log(gameObj1.coins);

console.log(gameObj1.points());

let gameObj2 = game;
gameObj2.newGame(2,2);
console.log(gameObj2.points());
console.log(gameObj2.lives);







