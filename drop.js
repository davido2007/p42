class drop{
    constructor(x,y){
        var options={
        friction:0.1,
        isStatic=false
    };
    this.x = x;
    this.y = y;
}
    display(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})

    
        }
        push();
        var maxDrops=100;
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }
    translate(pos.x, pos.y);
    noStroke();
    fill("blue");
    ellipse(0, 0, 60, 60);
    pop();

    

    }
}