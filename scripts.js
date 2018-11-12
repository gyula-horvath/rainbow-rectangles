var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;
var x = 0;
var y = 0;

for (var hue = 360; hue>=0; hue-=360/17){
  context.fillStyle = 'hsla('+hue+', 50%, 45%, 1)';
  context.fillRect(x, y, cw, ch);
  cw-=20;
  ch-=20;
  x+=10;
  y+=10;
}
