//Using glitch.com programming

let brushHue;
let priorX, proirY;
let lineVisible;
let brushSat, brushBri;
let thickness;
let colorPicker;
let pmouseX, pmouseY;

function setup()
{
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  thickness = 5;
  priorX = 0;
  priorY = 0;
  colorPicker = createColorPicker('#D6A3FF');
  instructions();
} 

function instructions()
{
  text("Choose a color!", 20, 20);
  text("Hold down the E key to toggle eraser :)", 20, 40);
  text("Hold down any key (that's not E) to clear the board :D", 20, 60);
}

function draw()
{
  chooseColors();
  if (lineVisible)
    {
        line(priorX, priorY, mouseX, mouseY);
    }
  priorX = mouseX;
  priorY = mouseY;
  
  if(keyIsPressed && key == 'e')
  {
    drawEraser();
  } 
}

function chooseColors()
{
  brushHue += 1;
  if (brushHue >= 360)
  {
    brushHue = 0; 
  }
  stroke(colorPicker.color(), brushSat, brushBri);
  fill(colorPicker.color(), brushSat, brushBri);
}

function mousePressed()
{
  lineVisible = true;
  strokeWeight(thickness);
  thickness += 1;
}

function mouseReleased()
{
  lineVisible = false;
}

function keyPressed()
{
  if (keyIsPressed && key !== 'e')
    {
      clear();
    }
    //brushHue = random(255);
  //brushSat = random(255);
  //brushBri = random(255);
  
  //clear(); 
}

function drawEraser()
{
  strokeWeight(50);
  stroke('white');
  line(priorX, priorY, mouseX, mouseY);
}
