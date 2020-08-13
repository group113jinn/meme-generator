'use strict'

var gCanvas;
var gCtx;
var gText;
var bcgActive;
var lineActive;




function memInit(imgIdx) {
    renderCanvas();
    gCanvas = document.getElementById('mem-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg(imgIdx);
    showLineIdx()
}


function drawText(text, x, y) {
    gCtx.lineWidth = '1';
    gCtx.strokeStyle = lineActive.color;
    gCtx.fillStyle = lineActive.gBcgColor;
    gCtx.font = `${lineActive.fontSize}px  Impact`;
    gCtx.textAlign = `${lineActive.align}`;
    var inputStr = gCtx.measureText(text);
    if (inputStr.width > 365) {
        if (lineActive.id === 3) {
            document.getElementById("mem-text").disabled = true;
            document.getElementById("mem-text").value = '';
            document.getElementById("mem-text").disabled = false;
            document.getElementById("mem-text").placeholder = 'Press next line to edit your text or press save '
            
           
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
                gCtx.lineWidth = '1';
                gCtx.strokeStyle = line.color;
                gCtx.fillStyle = line.gBcgColor;
                gCtx.font = `${line.fontSize}px  Impact`;
                gCtx.textAlign = `${line.align}`;
                gCtx.fillText(line.txt, line.positionX, line.positionY);
                gCtx.strokeText(line.txt, line.positionX, line.positionY);
            }
        })
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function drawImg(imgIdx) {
    findImage(imgIdx);
}



function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}



function handleText() {
    var vertical = lineActive.positionY;
    var horizontal = lineActive.positionX;
    clearCanvas();
    var input = document.querySelector('#mem-text');
    lineActive.txt = input.value;
    gCtx.drawImage(bcgActive, 0, 0, gCanvas.width, gCanvas.height);
    drawText(lineActive.txt, horizontal, vertical);

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
    lineActive = gMeme.lines[idx];

    document.querySelector('.line-current').textContent = `${getLineIdx()+1}`;
}

function onNextFontSize() {
    nextFontSize();
    showFontSize();
}

function setSize(size) {
    setFontSize(size);
}

function onLineUp() {
    getLineUp()
}
function onLineDown() {
    getLineDown()
}

function onAlignLeft(){
    alignLeft()
}
function onAlignCenter(){
    alignCenter()
}
function onAlignRight(){
    alignRight()
}