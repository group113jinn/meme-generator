'use strict'


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 1,

    lines: [

        {
            id: 1,
            stroke: '1',
            positionY: 45,
            positionX: 5,
            txt: '',
            font: 'Impact',
            fontSize: 40,
            align: 'start',
            color: 'black',
            bcgColor: 'white'

        },
        {
            id: 2,
            stroke: '1',
            positionY: 395,
            positionX: 5,
            txt: '',
            font: 'Impact',
            fontSize: 40,
            align: 'start',
            color: 'black',
            bcgColor: 'white'

        }
    ]
}

function findImage(imgIdx) {    //setting global variable activeImg for reuse
     gImgs.find(gimg => {
        if (imgIdx === gimg.id) {
            gMeme.selectedImgId = gimg.id;
            imgActive = gimg.url
        }
    })
   
}

function addLine() {
  if(gMeme.lines.length >= 8) {
      return;
  }

 const setId = gMeme.lines.length + 1;
 const setPositionY = gMeme.lines.length * 50;
 

    gMeme.lines.push(  
    {
        id: setId,
        stroke: '1',
        positionY: setPositionY,
        positionX: 5,
        txt: '',
        font: 'Impact',
        fontSize: 40,
        align: 'start',
        color: 'black',
        bcgColor: 'white'

    }
    
    )
}

function goNextLine() {
    (gMeme.selectedLineIdx + 1 > gMeme.lines.length) ? gMeme.selectedLineIdx = 1: gMeme.selectedLineIdx++;

}

function getLineIdx() {
    return gMeme.selectedLineIdx;
}

function setFontSize(size) {
    lineActive.fontSize = +size;
}

function getLineUp() {
    lineActive.positionY -= 20;
}

function getLineDown() {
    lineActive.positionY += 20;
}

function alignLeft() {
    clearCanvas();
    lineActive.align = 'start';
    lineActive.positionX = 5;
}

function alignCenter() {
    clearCanvas();
    lineActive.align = 'center';
    lineActive.positionX = 200;
}

function alignRight() {
    clearCanvas();
    lineActive.align = 'end';
    lineActive.positionX = 390;
}

function fontToggle() {
  if(isImpact){
    
      lineActive.font = 'Impact';
      isImpact = false;
  }else{
      lineActive.font = 'Arial';
      isImpact = true;
  }
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = `my-image${getRndInteger(1,10000)}.jpg`;
}

function getRndInteger(min, max) {   //helper creator for download file name 
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function changeStroke() {
    ( lineActive.stroke + 1 > 10) ? lineActive.stroke = 1: lineActive.stroke++;
  }

  function resetStoredText(){
    gMeme.lines.forEach(
        (line) => {
         line.txt = '';
        })

  }
