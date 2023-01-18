let size = 400;

function setup() {
  createCanvas(size, size);
}

function draw() {
  background(0);

  strokeWeight(30);
  stroke(255);
  point(size/2, size/2);
  

  strokeWeight(size/30);
  let r, g, b;
  for (let i = 20; i < size; i += size/10){
    for(let j = 20; j < size; j += size/10){
      r=(i+i)%256;
      g=(i*j)%256;
      b=(j+j)%256;
      stroke(r, g, b);
      point(i,j);
    }
  }
  
}
