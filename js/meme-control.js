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

// function drawSavedLine() {
//     gMeme.lines.map(
        
//         (line) => {
//             console.log("line",line.id);
//             console.log("active line",lineActive.id);
//             if (line.txt && line.id !== lineActive.id) {
//                 gCtx.fillText(line.txt, positionX, positionY);
//                 gCtx.strokeText(line.txt, positionX, positionY);

//             };
//         }
//     )
// }




function drawText(text, x, y) {
    gCtx.lineWidth = '1';
    gCtx.strokeStyle = lineActive.color;
    gCtx.fillStyle = lineActive.gBcgColor;
    gCtx.font = `${lineActive.fontSize}px  Ariel`;
    gCtx.textAlign = `${lineActive.textAlign}`;
    var m = gCtx.measureText(text);
    // console.log("active:", lineActive.txt);
    if (m.width > 365) {
        document.getElementById("mem-text").disabled = true;
        onNextLine()
    }
// drawSavedLine();

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