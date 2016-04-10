var initR, initH;
var initS = 70;
var initB = 90;

function setup() {
	var canvasContainer = document.getElementById("canvasContainer");
  var myCanvas = createCanvas((windowWidth - 100), (windowHeight - 100));
  myCanvas.parent(canvasContainer);
  colorMode(HSB, 100);
  background(70, 45, 30);

  //generate random color and radius
  initH = random(100);
  initR = random(10, 40);

}

function draw(){

}

function mouseDragged(){
	drawStroke(mouseX, mouseY, initH, initR);
}

function drawStroke(xval, yval, hval, rval) {
  fill(hval, initS, initB);
  noStroke();
  ellipse(xval, yval, rval, rval);
}