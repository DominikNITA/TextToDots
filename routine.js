class Routine{
    constructor(){
        this.scenes = [];
        this.actualSceneIndex = 0;
        this.colorManager = new ColorManager(color(29,200,143),color(255),color(80));
    }

    addScene(scene){
        this.scenes.push(scene);
    }

    draw(){
        if(this.scenes[this.actualSceneIndex].finished){
            this.scenes[this.actualSceneIndex].reset();
            this.actualSceneIndex++;
            if(this.actualSceneIndex >= this.scenes.length){
                this.actualSceneIndex = 0;
            }
        }
        else{
            background(this.colorManager.getBackgroundColor());
            this.scenes[this.actualSceneIndex].drawWords();
        }
    }
}