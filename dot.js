class Dot{
    constructor(posX, posY){
        this.pos = createVector(posX, posY);
        this.initialPos = createVector(posX, posY);
        this.speed = 4;
        this.arrived = false;
    }

    get position(){
        return this.pos;
    }

    setTarget(targetX, targetY){
        this.target = createVector(targetX, targetY);
    }

    changePosition(deltaX, deltaY){
        this.pos.x = this.pos.x + deltaX;
        this.pos.y = this.pos.y + deltaY;
    }

    moveConstantSpeedX(){
        return abs(this.target.x - this.pos.x) < 2 ? 0 : this.speed*(this.target.x - this.pos.x)/abs(this.target.x - this.pos.x);
    }

    moveConstantSpeedY(){
        return abs(this.target.y - this.pos.y) < 2 ? 0 : this.speed*(this.target.y - this.pos.y)/abs(this.target.y - this.pos.y);
    }

    moveConstantSpeedForBothAxis(){
        let deltaX = this.moveConstantSpeedX();
        let deltaY = this.moveConstantSpeedY();
        if(deltaX == 0 && deltaY == 0){
            this.arrived = true;
            console.log("Arrived: " + this.arrived, this.pos);
        }
        return [deltaX, deltaY];
    }

    moveXFirst(){
        let deltaX = this.moveConstantSpeedX();
        let deltaY = deltaX != 0 ? 0 : this.moveConstantSpeedY();
        return [deltaX, deltaY];
    }

    moveYFirst(){
        let deltaY = this.moveConstantSpeedY();
        let deltaX = deltaY != 0 ? 0 : this.moveConstantSpeedX();
        return [deltaX, deltaY];
    }

    moveArriveSameMoment(){
        let deltaX = (this.target.x - this.initialPos.x)/60;
        let deltaY = (this.target.y - this.initialPos.y)/60;
        return [deltaX, deltaY];
    }

    move(){
        if(!this.arrived){
            let delta = this.moveConstantSpeedForBothAxis();
            this.changePosition(delta[0], delta[1]);
            if(dist(this.pos.x, this.pos.y, this.target.x, this.target.y) < 2.6 || (delta[0] == 0 && delta[1] == 0)){
                this.pos = this.target;
                this.arrived = true;
            }
        }
    }
}