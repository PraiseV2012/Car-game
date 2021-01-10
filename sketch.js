var gameState = 0
var playerCount = 0
var player,game,form
var datebase,position

function setup(){
    database = firebase.database()

    createCanvas(400,400);
    game = new Game();
    game.getState();
    game.start();
    
   
}

function draw(){
    



    drawSprites();
}



