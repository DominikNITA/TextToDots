class ColorManager{
    constructor(wordsColor, titleColor, backgroundColor){
        this.wordsColor = wordsColor;
        this.titleColor = titleColor;
        this.backgroundColor = backgroundColor;
    }

    getDotsColor(){
        //return color(29,200,143);
        return this.wordsColor;
    }

    getBackgroundColor(){
        return this.backgroundColor;
    }
}