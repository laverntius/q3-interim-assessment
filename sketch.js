var myArray = new Array("I hate IA's", "Done", "Finished", "Thanks Mr B")
var y = 0;
var x = 0;
function setup(){
    createCanvas(600,400);
    background(221,221,221);
}

function draw(){
  //shimmy();
  fill(0);
    textSize(32);
    text(myArray[3], 10, 30);
  circle();
  slide();
}


//blue rect
function shimmy(){
    fill(65, 20, 190);
    x = 200;
    y++;
    rect(x, y, 200, height);
    
}

function circle(){
    fill(128,0,0);
    if(mouseIsPressed){
       
        ellipse(mouseX, mouseY, 30, 30);
    }
}

function slide(){
    
    y = 200;
    x++;
     fill(221,221,221)
    ellipse( x, y, 40, 40);
   
    fill(255,0,255)
    ellipse( x + 100, y, 40, 40);
    if(x > 600){
        x = 0;
    }
}

