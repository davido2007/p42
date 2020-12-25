class umbrella{
    constructor(x,y){
        
    }
    display(){
        push();
        translate(pos.x, pos.y);
        noStroke();
        fill("blue");
        ellipse(0, 0, 60, 60);
        pop();
    }
}