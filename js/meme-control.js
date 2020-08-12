'use strict'

var gCanvas;
var gCtx;
var gCurrShape = 'text';
var gText;
var gColor = "#0000ff";
var gBcgColor = "#00ff00";
var bcgActive;


function memInit() {
    document.querySelector('.canvas-container').classList.toggle('show')
    gCanvas = document.getElementById('mem-canvas');
    gCtx = gCanvas.getContext('2d');
   bcgActive =  drawImg();
}

function draw(ev) {
    const { offsetX, offsetY } = ev;
    

    switch (gCurrShape) {
        case 'triangle':
            drawTriangle(offsetX, offsetY);
            break;
        case 'rect':
            drawRect(offsetX, offsetY);
            break;
        case 'text':
            drawText(gText, offsetX, offsetY);
            break;
        case 'line':
            drawLine(offsetX, offsetY);
            break;
        case 'arc':
            drawArc(offsetX, offsetY);
            break;
        case 'pencil':
            drawPencil();
            break;
        case 'weird':
            drawWeird();
            break;
    }
}

function setText(){
    gText =  checkMemInput();
}

// function setShape(shape) {
//     gCurrShape = shape;
// }

function drawText(text, x, y) {
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = gColor;
    gCtx.fillStyle = gBcgColor;
    gCtx.font = '40px Ariel';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
   
}

function drawImg() {
    const img = new Image();
    img.src = gImgs[0].url;
    img.onload = () => {
        bcgActive = img;
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    }
}

var horizontal = 30; 

function checkMemInput() {

    var vertical = 30;
    if(horizontal > (gCanvas.width/2)){
        console.log('noob');
        vertical = 130;
        horizontal = 30; 
        return;
    }
   var input = document.querySelector('#mem-text');
   clearCanvas();
  
   
   gCtx.drawImage( bcgActive, 0, 0, gCanvas.width, gCanvas.height);
 drawText(input.value, horizontal, vertical)
 console.log(horizontal);
horizontal += 10;
// vertical += 25;

}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gCanvas.width / 2, gCanvas.height / 2);
}