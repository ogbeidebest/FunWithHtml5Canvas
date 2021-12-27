const canvas = document.querySelector('#draw');
const canvasContent = canvas.getContext('2d');
canvas.width = window.innerWidth; //gives the canvas the width of the window
canvas.height = window.innerHeight; //gives the canvas the height of the window
canvasContent.strokeStyle = '#BADA55';
canvasContent.lineJoin = 'round';  // the continuation of the drawing line
canvasContent.lineCap = "round";  //the shape of the drawing line
canvasContent.lineWidth = 100;  //the width of the drawing line
// ctx.shadowColor = color;
canvasContent.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let colorLineSize = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the function from running when they are not moused down
//   console.log(e);
  canvasContent.strokeStyle = `hsl(${colorLineSize}, 100%, 50%)`;  //the range of color in the spetrum
  canvasContent.beginPath();
  // start from
  canvasContent.moveTo(lastX, lastY);
  // go to
canvasContent.lineTo(e.offsetX, e.offsetY);
  canvasContent.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  colorLineSize++;
  if (colorLineSize >= 360) {
    hue = 0;
  } // brings the colorlinesize in the color spetrum back to 0 once it gets to 360
  if (canvasContent.lineWidth >= 100 || canvasContent.lineWidth <= 1) {
    direction = !direction;
  }  

  if(direction) {
    canvasContent.lineWidth++;
  } else {
    canvasContent.lineWidth--;
  }

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

