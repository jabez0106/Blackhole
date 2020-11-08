var blackhole;

function setup() {
  createCanvas(600, 600);
  blackhole = new Blackhole();
  frameRate(60);
}

function draw() {
  background(50,5);
  blackhole.display();
  blackhole.scaleBounce();
}

class Blackhole {
  constructor() {
  }
  
  display() {
    fill(0);
    strokeWeight(20); 
    stroke('rgba(100,0,100,100)');
    translate(300,300)
  }
  
  scaleBounce() {
    if (keyIsPressed === true) {
      let step = frameCount % 120;
      applyMatrix(step / 100, 0, 0, step / 100, 0, 0);
      circle(0, 0, 600);
    } else {
      let step = frameCount % 20;
      applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
    }
  } 
}
