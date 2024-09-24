let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'. "
// let asciiChar = " .:-=+*#%@";

let video; let size = 4; let vidSize; 

function setup() {
  createCanvas(400, 400);
  vidSize = width / size;
  
  video = createVideo("assets/flower7.mp4");
  video.loop();
  video.hide();
  video.size(vidSize, vidSize); 
}

function draw() {
    clear(); //transparent background
  // image(vid, 0, 0);
  
  video.loadPixels();
  
  /* ---- Using pixels ---- */
  for (let i=0; i<video.width; i++) {
    for (let j=0; j<video.height; j++) {
      let pixelIndex = (i + j*video.width) * 4;
      let r = video.pixels[pixelIndex + 0];
      let g = video.pixels[pixelIndex + 1];
      let b = video.pixels[pixelIndex + 2];
      
      // let bright = brightness(color(r, g, b))
      let bright = (r + g + b) / 3;
      let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length));
      
      let x = i*size + size/2;
      let y = j*size + size/2;
      let t = asciiChar.charAt(tIndex);
      stroke(255);
      textSize(size);
      textAlign(CENTER, CENTER);
      text(t, x, y);
    }
  }
}
