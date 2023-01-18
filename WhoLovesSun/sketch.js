let size = 400;

function setup() {
  createCanvas(size, size);
}

function draw() {
  let center = size/2;
  background(48,150,165);

  line(size/2,size/2,size,size);
  line(size/2,size/2,0,size);
  line(size/2,size/2,size-(size/7),size);

  fill(33);
  textSize(40);
  textFont('Helvetica');
  text('HELLO WORLD',center-(size/2.8),center-(size/4.1));

  fill(252,248,2);
  textSize(40);
  textFont('Helvetica');
  text('HELLO WORLD',center-(size/2.7),center-(size/4));

  

  fill(249,247,104);
  circle(center,center,size/4);
  
  fill(93,94,27);
  triangle(center,center,size,size,size-(size/7),size);
  fill(195,193,54);
  triangle(center,center,0,size,size-(size/7),size);
}
