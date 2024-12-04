function setup() {
 // put setup code here
 createCanvas(displayWidth,displayHeight);
 background('white');
 text('press w to change it to blue', 405,210);
 text('press s to change it lightgreen', 600,300);
 text('click on the mouse to change shape', 500,250);
 text('press d to change it to blue', 700,350);
 // A CSS named color.
 fill('red')
 rect(mouseX,mouseY,150,75);
 var size = 15
 }

function draw() {
  // put drawing code here
  if(mouseIsPressed){
  	rect(mouseX,mouseY,150,75);
   }
 else{
 	ellipse(mouseX,mouseY,100,100);
 }
  if(keyIsPressed === true && key === 'w'){
    fill('blue')
}
  if(keyIsPressed === true && key === 's'){
  	fill('lightgreen')
  }
  if(keyIsPressed === true && key === 'd'){
  	fill('purple')
  }

}
