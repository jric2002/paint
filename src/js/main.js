/* Paint */
const PAPER = document.getElementById("paper");
const RECT = PAPER.getBoundingClientRect();
var paper_width = document.getElementById("paper-width");
var paper_height = document.getElementById("paper-height");
const SET_BTN = document.getElementById("set-size-btn");
const PENCIL_COLOR = document.getElementById("pencil-color");
const LINE_WIDTH = document.getElementById("line-width");
var ctx = PAPER.getContext("2d");
var drawing = false;
var position_x1, position_y1;
var position_x2, position_y2;

function setPaperSize(width, height) {
  PAPER.width = width;
  PAPER.height = height;
}
function draw(ctx, x1, y1, x2, y2, color, size) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  //ctx.fillStyle = color;
  //ctx.fillRect(x1, y1, (size * 3), (size * 3));
  ctx.stroke();
  ctx.closePath();
}
PAPER.addEventListener("mousedown", function(event) {
  position_x1 = event.clientX - RECT.left;
  position_y1 = event.clientY - RECT.top;
  drawing = true;
});
PAPER.addEventListener("mousemove", function(event) {
  position_x2 = event.clientX - RECT.left;
  position_y2 = event.clientY - RECT.top;
  if (drawing) {
    draw(ctx, position_x1, position_y1, position_x2, position_y2, PENCIL_COLOR.value, LINE_WIDTH.value);
    position_x1 = position_x2;
    position_y1 = position_y2;
  }
});
window.addEventListener("mouseup", function () {
  if (drawing == true) {
    draw(ctx, position_x1, position_y1, position_x2, position_y2, PENCIL_COLOR.value, LINE_WIDTH.value);
    drawing = false;
  }
});
SET_BTN.addEventListener("click", function() {
  setPaperSize(paper_width.value, paper_height.value);
});