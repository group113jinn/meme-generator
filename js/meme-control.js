'use strict'

var gCanvas;
var gCtx;
var isColor = false;          //change color button text toggle
var isImpact;                //font toggle 
var lineActive = {};
var imgActive;


function memInit(imgIdx) {    //initialized from gallery image click
    renderCanvas();
    gCanvas = document.getElementById('mem-canvas');
    gCtx = gCanvas.getContext('2d');
    findImage(imgIdx);            //binding img idx
    reloadImg();
    getActiveLine();
    showLineOnCanvas();  
}

function drawText() { 

    drawImg();
                                     //    main rendering
    getActiveLine();
    
    drawImg();
gMeme.lines.forEach(                                           // looping through all lines and rendering 
            (line) => {
                    gCtx.lineWidth = line.stroke;
                    gCtx.strokeStyle = line.color;
                    gCtx.fillStyle = line.bcgColor;
                    gCtx.font = `${line.fontSize}px  ${line.font}`;
                    gCtx.textAlign = line.align;
                    gCtx.fillText(line.txt, line.positionX, line.positionY);
                    gCtx.strokeText(line.txt, line.positionX, line.positionY);
            })
          

}


function handleText() {       // called from html oninput
    getActiveLine();
    drawImg()
    var input = document.querySelector('#mem-text');
    lineActive.txt = input.value;
    var inputStr = gCtx.measureText(lineActive.txt);
    if (inputStr.width > 365) {                                //deactivating input field on too many characters inserted
        document.getElementById("mem-text").disabled = true;
            setTimeout(() => {
                document.getElementById("mem-text").disabled = false;
            }, 1000);
    }
   
    drawText();
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
        showLineOnCanvas();                       // emphasizing active line
    }
}

function clearCanvas() {       // text rendering help function for clearing canvas before any change
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
    drawImg();
    goNextLine();
    getActiveLine();
    document.getElementById("mem-text").value = lineActive.txt
    drawText();
    document.getElementById("mem-text").select()
    showLineOnCanvas();                                // emphasizing active line
    
}
                                                                       
function getActiveLine() {      // Active line assignment//
    var idx = getLineIdx();    
    gMeme.lines.find(line => {
        if (line.id === idx) {
            lineActive = line
        }
    })

   
}

function onNextFontSize() {
    getActiveLine();
    nextFontSize();
    showFontSize();
    drawText()
}

function setSize(size) {
    setFontSize(size);
    drawText()
}

function onLineUp() {
    getLineUp();
    drawText();
}

function onLineDown() {
    getLineDown();
    drawText()
}

function onAlignLeft() {
    alignLeft();
    drawText()
}

function onAlignCenter() {
    alignCenter();
    drawText()
}

function onAlignRight() {
    alignRight();
    drawText()
}

function onFontToggle() {
    fontToggle();
    drawText()
}

function onChangeStroke() {
    changeStroke();
    drawText()
}

function onClearCanvas() {
    clearCanvas()
    drawImg();
}

function onAddLine() {
    addLine();
    drawText()
}

function setColor(ev) {
    ev.preventDefault();
    lineActive.color = document.getElementById('color-tool').value;
    drawText()
}

function setBcgColor(ev) {
    ev.preventDefault();
    lineActive.bcgColor = document.getElementById('bcolor-tool').value;
    drawText()
    
}

function showColorPicker() {
    document.getElementById('color-tool').hidden = false;
}

function showBColorPicker() {
    document.getElementById('bcolor-tool').hidden = false;
}

function colorUpdate() {
    if (!isColor) {
        showColorPicker();
        document.querySelector('.color-btn').classList.toggle('noimage');
        document.querySelector('.color-btn').innerText = 'apply';
        isColor = true;
    } else {
        document.querySelector('.color-btn').classList.toggle('noimage');
        document.querySelector('.color-btn').innerText = '';
        isColor = false;
        document.getElementById('color-tool').hidden = true;
    }
}

function bcgColorUpdate() {
    if (!isColor) {
        showBColorPicker();
        document.querySelector('.bcolor-btn').classList.toggle('noimage');
        document.querySelector('.bcolor-btn').innerText = 'apply';
        isColor = true;
    } else {
        document.querySelector('.bcolor-btn').classList.toggle('noimage');
        document.querySelector('.bcolor-btn').innerText = '';
        isColor = false;
        document.getElementById('bcolor-tool').hidden = true;
    }
}


function showLineOnCanvas() {          // emphasizing active line
      gCtx.rect(lineActive.positionX, lineActive.positionY - 45, 390, 50); 
gCtx.fillStyle = 'rgba(135, 135, 135, 0.45';
gCtx.fillRect(lineActive.positionX, lineActive.positionY - 45 , 390, 50);     
}