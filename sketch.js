let x=0;
let font;
let fr = 30;
let scene;


function preload() {
  font = loadFont('Anton-Regular.ttf');
}

function setup () {
    let canvas = createCanvas(1200,550);
    canvas.id("canvas");
    canvas.parent('canvasHolder');
    background(100);

    frameRate(fr);
    angleMode(DEGREES);

    textSize(140);
    textFont(font);
    // noStroke();
    // fill(0);
    // text('VSC', (width-textWidth('VSC'))/2, (height+textSize())/2);


    // let points = font.textToPoints('C#', (width-textWidth('C#'))/2, (height+textSize())/2, 192);
    // points.forEach( pt => {
    //   strokeWeight(8);
    //   stroke(250,250,250);
    //   point(pt.x,pt.y);
    // });
    routine = new Routine();
    scene = new Scene(['Java', 'C#/C++', 'Python', 'JS'],'test','black',5, font);
    scene2 = new Scene(['Dodo','Yo', 'Hey'],'test','black',5, font);
    routine.addScene(scene);
    routine.addScene(scene2);
  }

function draw () {
    routine.draw();
  }