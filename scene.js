class Scene{
    defaultPlaces = [[30,15],[70,15],[30,85],[70,85]];

    constructor(wordsList, title, color, duration, font, possiblePlaces = this.defaultPlaces){
        this.wordsList = wordsList;
        this.color = color;
        this.title = title;
        this.duration = duration;
        this.possiblePlaces = this.defaultPlaces;
        this.font = font;
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
        this.words.forEach(word => {
            word.moveDots();
            word.drawDots();
        });
    }

}