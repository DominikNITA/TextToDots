class Dot{
    constructor(posX, posY){
        this.pos = createVector(posX, posY)
        this.speed = 3.5;
        this.arrived = false;
    }

    get position(){
        return this.pos;
    }

    setTarget(targetX, targetY){
        this.target = createVector(targetX, targetY);
    }

    move(){
        if(!this.arrived){
            let deltaX = abs(this.target.x - this.pos.x) < 2 ? 0: (this.target.x - this.pos.x)/abs(this.target.x - this.pos.x);
            let deltaY = abs(this.target.y - this.pos.y) < 2 ? 0: (this.target.y - this.pos.y)/abs(this.target.y - this.pos.y);
            this.pos.x = this.pos.x + this.speed*deltaX;
            this.pos.y = this.pos.y + this.speed*deltaY;
            if(dist(this.pos.x, this.pos.y, this.target.x, this.target.y) < 2){
                this.pos = this.target;
                this.arrived = true;
            }
        }
    }
}