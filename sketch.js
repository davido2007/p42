var Umbrella;

function preload(){
    
}

function setup(){
    createCanvas(600,400);
    Umbrella = new umbrella(300,200)
}

function draw(){
    Umbrella.display();
    drop();
}   

