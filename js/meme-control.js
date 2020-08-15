'use strict'

var gCanvas;
var gCtx;
var gText;
var lineActive;
var imgActive;
var isImpact;
var isColor = false;




function memInit(imgIdx) {
    renderCanvas();
    gCanvas = document.getElementById('mem-canvas');
    gCtx = gCanvas.getContext('2d');
     findImage(imgIdx);
    drawImg();
    showLineIdx()
    isImpact = false;
}


function drawText(text, x, y) {
    // move to servive
    gCtx.lineWidth = lineActive.stroke;
    gCtx.strokeStyle = lineActive.color;
    gCtx.fillStyle = lineActive.gBcgColor;
    gCtx.font = `${lineActive.fontSize}px  ${lineActive.font}`;
    gCtx.textAlign = `${lineActive.align}`;
    var inputStr = gCtx.measureText(text);
    if (inputStr.width > 365) {
        if (lineActive.id === 3) {
            document.getElementById("mem-text").disabled = true;
            document.getElementById("mem-text").value = '';
            document.getElementById("mem-text").disabled = false;
            document.getElementById("mem-text").placeholder = 'Press next line to edit your text'
            
           
        } else {
            document.getElementById("mem-text").disabled = true;
            document.getElementById("mem-text").placeholder = 'Click here to continue';
            onNextLine()
            document.getElementById("mem-text").select()
        }
    }
    gMeme.lines.find(
        (line) => {
            if (line.txt && line.id !== lineActive.id) {
                // move to service
                gCtx.lineWidth = line.stroke;
                gCtx.strokeStyle = line.color;
                gCtx.fillStyle = line.gBcgColor;
                gCtx.font = `${line.fontSize}px  ${line.font}`;
                gCtx.textAlign = `${line.align}`;
                gCtx.fillText(line.txt, line.positionX, line.positionY);
                gCtx.strokeText(line.txt, line.positionX, line.positionY);
            }
        })
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function handleText() {
    var vertical = lineActive.positionY;
    var horizontal = lineActive.positionX;
    clearCanvas();
    drawImg()
    var input = document.querySelector('#mem-text');
    lineActive.txt = input.value;
    drawText(lineActive.txt, horizontal, vertical);

}

function drawImg() {
     const img = new Image();
      img.src = imgActive;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function reloadImg() {
     const img = new Image();
      img.src = imgActive;
     img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
     }
}


function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function onResetCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    resetStoredText();
    document.getElementById("mem-text").value = '';
    document.getElementById("mem-text").select()
    reloadImg();
}


function onNextLine() {
    var input = document.getElementById("mem-text")
    input.disabled = false;
    input.value = '';

    goNextLine();
    showLineIdx();
}

function showLineIdx() {
    var idx = getLineIdx();
    gMeme.lines.find(line => {
       if(line.id === idx){
           lineActive = line
       }
    })

    document.querySelector('.line-current').textContent = `${idx}`;
}

function onNextFontSize() {
    nextFontSize();
    showFontSize();
}

function setSize(size) {
    setFontSize(size);
}

function onLineUp() {
    getLineUp();
}
function onLineDown() {
    getLineDown();
}

function onAlignLeft(){
    alignLeft();
}
function onAlignCenter(){
    alignCenter();
}
function onAlignRight(){
    alignRight();
}

function onFontToggle() {
    fontToggle();
}
function onChangeStroke() {
    changeStroke();
}

 function onClearCanvas() {
     clearCanvas()
     drawImg();
 }


 
function setColor(ev) {
    ev.preventDefault();
    lineActive.color = document.getElementById('color-tool').value;
    }
    
    function setBcgColor(ev) {
    ev.preventDefault();
    lineActive.gBcgColor = document.getElementById('bcolor-tool').value;
    }

 function showColorPicker() {
    document.getElementById('color-tool').hidden = false;
}

function showBColorPicker() {
    document.getElementById('bcolor-tool').hidden = false;
}

function colorUpdate() {
   if(!isColor){
       showColorPicker();
       document.querySelector('.color-btn').innerText = 'apply';
       isColor = true;
   }else{
      document.querySelector('.color-btn').innerText = 'color';
       isColor = false;
       document.getElementById('color-tool').hidden = true;
   }
}

function bcgColorUpdate() {
   if(!isColor){
       showBColorPicker();
       document.querySelector('.bcolor-btn').innerText = 'apply';
       isColor = true;
   }else{
      document.querySelector('.bcolor-btn').innerText = 'bColor';
       isColor = false;
       document.getElementById('bcolor-tool').hidden = true;
   }
}