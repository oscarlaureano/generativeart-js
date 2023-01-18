
let font,
  fontsize = 32;

let angleRotate = 0.0;

function setup() {
  createCanvas(710, 400);
  background(0);

  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/SourceSansPro-Regular.otf');

  // Set text characteristics
  textFont(font);
}

function draw() {
  background(0);

  strokeWeight(1);
  stroke(153);

  push();
  let angle1 = radians(45);
  translate(100, 180);
  rotate(angle1);
  line(0, 0, 150, 0);
  pop();

  push();
  let angle2 = radians(270);
  translate(200, 180);
  rotate(angle2);
  line(0, 0, 150, 0);
  pop();

  push();
  translate(355, 180);
  rotate(radians(angleRotate));
  text(int(angleRotate) % 360 + " HELLO WORLD ", 0, 0);
  line(0, 0, 150, 0);
  pop();

  angleRotate += 0.2;

  stroke(255, 0, 0);
  strokeWeight(4);
  point(100, 180);
  point(200, 180);
  point(355, 180);
  
}
