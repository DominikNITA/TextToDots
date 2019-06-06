class Scene{
    defaultPlaces = [[30,15],[70,15],[30,85],[70,85]];

    constructor(wordsList, title, duration, font, possiblePlaces = this.defaultPlaces){
        this.wordsList = wordsList;
        this.title = title;
        this.dotsColor = color(0);
        this.titleColor = color(255);
        this.duration = duration;
        this.possiblePlaces = possiblePlaces;
        this.font = font;
        this.reset();
    }

    setColors(dotsColor = this.dotsColor, titleColor = this.titleColor){
        this.dotsColor = dotsColor;
        this.titleColor = titleColor;
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
                this.words.forEach(word => {
                    word.moveDots();
                });
                this.checkArrived();
            }
            else{
                console.log(this.elapsedFrames);
                this.elapsedFrames++;
                if(this.elapsedFrames/frameRate() >= this.duration){
                    this.finished = true;
                }
            }
            this.words.forEach(word => {
                word.drawDots(this.dotsColor);
            });
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