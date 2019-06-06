let x=0;
let font;
let fr = 30;
let scene;


function preload() {
  font = loadFont('Anton-Regular.ttf');
}

function setup () {
    var canvasHolder = document.getElementById("canvasHolder");
    let dimensions = canvasHolder.getBoundingClientRect();
    let canvas = createCanvas(dimensions.width, dimensions.height);
    canvas.id("canvas");
    canvas.parent('canvasHolder');
    background(100);

    frameRate(fr);
    angleMode(DEGREES);

    textSize(140);
    textFont(font);

    routine = new Routine();
    scene = new Scene(['Java', 'C#/C++', 'Python', 'JS'],'test',5, font);
    scene2 = new Scene(['Dodo','Yo', 'Hey'],'test',5, font);
    routine.addScene(scene);
    routine.addScene(scene2);
  }

function draw () {
    routine.draw();
  }