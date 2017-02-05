function setup() {
  createCanvas(400,400)
  frameRate(1)
  
  
}

function draw() {
  
  background(0)
  
  for(var x = 3; x <= 400; x+= 25) {
    for(var y = 3; y <= 400; y+= 25) {
      
      noStroke()
      
      var colors = random()
      console.log(colors)
      
      if(colors < 0.2) {
        stroke(255, 255, 255)
      } 
      else if(colors < 0.4) {
        stroke(204, 204, 204) 
      } 
      else if(colors < 0.6) {
        stroke(153, 153, 153) 
      } 
      else if(colors < 0.8) {
        stroke(102, 102, 102)
      } 
      else if(colors < 1)  {
        stroke(51, 51, 51)
      }
      noFill()  
      ellipse(x, y, (x+y)/30);
      line(x, y, x+15, y+15)
    }
  
  }
  
  
}