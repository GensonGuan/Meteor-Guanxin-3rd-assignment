function setup() {
  createCanvas(400,400)
  frameRate(1)
  
  
}

function draw() {
  
  for(var x = 0; x <= 400; x+= 25) {
    for(var y = 0; y <= 400; y+= 25) {
      
      noStroke()
      
      var colors = random()
      console.log(colors)
      
      if(colors < 0.2) {
        fill(color(255, 25, 53))
      } 
      else if(colors < 0.4) {
        fill(color(20, 66, 56)) 
      } 
      else if(colors < 0.6) {
        fill(color(150, 190, 100)) 
      } 
      else if(colors < 0.8) {
        fill(color(200, 255, 30))
      } 
      else if(colors < 1)  {
        fill(color(0, 10, 0))
      }
        
      quad(x, y, x, y+25, x+25, y, x+25, y-25);
    }
  
  }
  
  
}