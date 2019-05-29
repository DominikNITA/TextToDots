class Scene{
    defaultPlaces = [[30,15],[70,15],[30,85],[70,85]];

    constructor(wordsList, title, color, duration, font, possiblePlaces = this.defaultPlaces){
        this.wordsList = wordsList;
        this.color = color;
        this.title = title;
        this.duration = duration;
        this.possiblePlaces = possiblePlaces;
        this.font = font;
        this.reset();
    }

    reset(){
        this.elapsedFrames = 0;
        this.arrived = false;
        this.finished = false;
        this.words = this.createWords();
    }


    createWords(){
        let words = [];
        for (let index = 0; index < this.wordsList.length; index++) {
            words.push(new Word(this.wordsList[index],this.possiblePlaces[index][0],this.possiblePlaces[index][1],font));
        }
        return words;
    }

    drawWords(){
        if(!this.finished){
            if(!this.arrived){
                background(100);
                this.words.forEach(word => {
                    word.moveDots();
                    word.drawDots();
                });
                this.checkArrived();
            }
            else{
                console.log("Finished: " + this.finished);
                this.elapsedFrames++;
                if(this.elapsedFrames/frameRate() >= this.duration){
                    this.finished = true;
                }
            }
        }

    }

    checkArrived(){
        let res = true;
        for (let index = 0; index < this.words.length; index++) {
            const word = this.words[index];
            word.checkArrived();
            if(!word.arrived){
                res = false;
                break;
            }
        }
        this.arrived = res;
        console.log(this.arrived);
    }
}