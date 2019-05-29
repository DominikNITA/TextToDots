class Routine{
    constructor(){
        this.scenes = [];
        this.actualScene = 0;
        this.colorManager = new ColorManager(color(255),color(255),color(50));
    }

    addScene(scene){
        this.scenes.push(scene);
    }

    draw(){
        if(this.scenes[this.actualScene].finished){
            this.scenes[this.actualScene].reset();
            this.actualScene++;
            if(this.actualScene >= this.scenes.length){
                this.actualScene = 0;
            }
        }
        else{
            this.scenes[this.actualScene].drawWords();
        }
    }
}