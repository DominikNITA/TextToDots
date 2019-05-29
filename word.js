class Word{
    constructor(textContent, posX, posY,font){
        this.textContent = textContent;
        this.posX = posX;
        this.posY = posY;
        this.font = font;
        this.dots = [];
        this.createDots();
        this.setTargets();
        this.arrived = false;
    }

    createDots(){
        this.createTextPoints();
        this.points.forEach(point => {
            let r = random(0, width / 20);
            let angle = random(0,360);
            this.dots.push(
                new Dot(
                    cos(angle) * r + width / 2,
                    sin(angle) * r + height / 2
                )
            );
        });
    }

    createTextPoints(){
        this.points = this.font.textToPoints(
            this.textContent,
            (width * this.posX / 100) - textWidth(this.textContent)/2,
            (height * this.posY / 100) + textSize() / 2.2,
            130,
            {sampleFactor: 0.15});
    }

    setTargets(){
        for (let index = 0; index < this.points.length; index++) {
            this.dots[index].setTarget(
                int(this.points[index].x),
                int(this.points[index].y)
            );
        }
    }

    drawDots(){
        ///refactor
        strokeWeight(5);
        stroke(140,250,50);
        this.dots.forEach(dot => {
            point(dot.position.x,dot.position.y);
        });
        //testing
        strokeWeight(3);
        stroke(0,0,250);
        point(width * this.posX / 100 , height * this.posY /100);
    }

    moveDots(){
        this.dots.forEach(dot => {
            dot.move();
        });
    }

    checkArrived(){
        let res = true;
        for (let index = 0; index < this.dots.length; index++) {
            const dot = this.dots[index];
            if(!dot.arrived){
                res = false;
                break;
            }
        }
        this.arrived = res;
    }
}