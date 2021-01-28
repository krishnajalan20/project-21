var block1,block2,block3,block4;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){

    createCanvas(800,600);
    music.loop();
    
    edges = createEdgeSprites();

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "red";
    
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "lightblue";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "pink";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));

    ball.bounceOff(edges);

    if(isTouching(ball,block2)){
        ball.velocityY = 0;
        ball.velocityX = 0;
        music.stop();
    }
    isTouching(ball,block1);
    isTouching(ball,block3)
    if(isTouching(ball,block4)){
        music.play();
    }

    drawSprites();
}