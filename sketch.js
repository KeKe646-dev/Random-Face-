//color vars
eyeShadowColor = ["#FF2E2E", "#B199FF", "#FF8DD3", "#87DD7E", "#FFF93D"];
ShadowC = eyeShadowColor[0];

shirtColor = ["#FFFFFF", "#AEAEAE", "#8CB4FF", "#BB6C3B", "#9A55B1"];
shirtC = shirtColor[0];

lipColor = ["#FF75A5", "#FF3535", "#B5002D", "#45093C", "#FF7434"];
lipC = lipColor[0];

irisColor = ["#4665ba", "#497f45", "#673c22", "#bf1a1a", "#ff73ad"];
irisC = irisColor[0];

hairColor = ["#FFB1D7", "#7FD0FF", "#0A622C", "#000000", "#FFE173"];
hairC = hairColor[0];

eyeLinerColor = ["#ff007b", "#ff7d32", "#0020c2", "#7a440e", "#00cec7"];
eyelineC = eyeLinerColor[0];

colors = ["#FF1053", "#66C7F4", "#B7F0AD", "#F26419", "#272635"];

faceC = 0;
go = false;

//sounds vars BG MUSIC + CLICK EFFECT

let fart;
let bgMusic;
function preload() {
  fart = loadSound("Quick Reverb Fart - Sound Effect (HD).mp3");
  bgMusic = loadSound("undertale wrong number song loop.mp3");
}

function setup() {
  createCanvas(500, 500);
  bgMusic.loop();
}

function draw(x, y) {
  background(255,200,220);
  face(250, 250);
  text("Press C to change your look!", 170, 30);
  if (go) {
    randFace();
  }
}

function keyPressed() {
  if (key === "c") {
    go = true;
    fart.play();
  }
}

function keyRelease() {
  if (key === "c") {
    go = false;
  }
}

function randFace() {
  let pos = int(random(0, 5));
  faceC = colors[pos];
  let es = int(random(0, 5));
  ShadowC = eyeShadowColor[es];
  let sc = int(random(0, 5));
  shirtC = shirtColor[sc];
  let lc = int(random(0, 5));
  lipC = lipColor[lc];
  let ic = int(random(0, 5));
  irisC = irisColor[ic];
  let elc = int(random(0, 5));
  eyelineC = eyeLinerColor[elc];
  let hc = int(random(0, 5));
  hairC = hairColor[hc];
  go = false;
}
function face(x, y) {
  noStroke();

  //back hair
  push();
  fill(hairC);
  ellipse(250, 350, 250, 400);
  pop(); //back of hair

  //shirt
  push();
  fill(shirtC);
  ellipse(250, 490, 230, 300);
  pop();

  //neck
  push();
  fill(240, 200, 190);
  ellipse(250, 340, 80, 130);
  pop();

  //base face
  push();
  fill(255, 220, 200);
  ellipse(250, 200, 250, 300);
  pop();

  //eyeshadow
  push();
  fill(ShadowC);
  ellipse(170, 205, 80, 50); //left
  ellipse(330, 205, 80, 50); //right
  pop();

  //eyeliner
  push();
  fill(eyelineC);
  arc(180, 196, 90, 100, 0, PI); //left eye
  arc(320, 196, 90, 100, 0, PI); //right eye
  pop();

  //eyes
  arc(180, 200, 90, 100, 0, PI); //left eye
  arc(320, 200, 90, 100, 0, PI); //right eye

  //iris
  push();
  fill(irisC);
  arc(180, 200, 60, 80, 0, PI); //left eye
  arc(320, 200, 60, 80, 0, PI); //right eye
  pop();

  //eyebrows
  push();
  fill("black");
  rect(160, 170, 60, 10); //left brow
  rect(280, 170, 60, 10); //right brow
  pop();

  //lipstick
  push();
  fill(lipC);
  ellipse(250, 290, 70, 40); //top lip
  arc(250, 290, 70, 80, 0, PI); //bottom lip
  pop();

  //mouth
  push();
  fill("brown");
  arc(250, 280, 80, 80, 0, PI);
  pop();

  //hair front

  push();
  fill(hairC);
  arc(345, 250, 90, 280, 4.7, PI / 2);
  pop(); //side hair right

  push();
  translate(250, 510);
  rotate(3.2);
  fill(hairC);
  arc(125, 250, 90, 280, 4.7, PI / 2);
  pop(); //side hair left

  push();
  fill(hairC);
  translate(65, 410);
  rotate(-14.13);
  arc(250, 180, 240, 260, 4.7, PI / 2);
  pop();
}
