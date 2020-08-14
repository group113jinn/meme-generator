'use strict'




var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 1,

    lines: [

        {
            id: 1,
            stroke: '1',
            positionY: 70,
            positionX: 10,
            txt: '',
            font: 'Impact',
            fontSize: 30,
            align: 'left',
            color: 'yellow',
            bcgColor: 'green'

        },
        {
            id: 2,
            stroke: '1',
            positionY: 230,
            positionX: 10,
            txt: '',
            font: 'Impact',
            fontSize: 30,
            align: 'left',
            color: 'pink',
            bcgColor: 'violet'

        },

        {

            id: 3,
            stroke: '1',
            positionY: 390,
            positionX: 10,
            txt: '',
            font: 'Impact',
            fontSize: 30,
            align: 'left',
            color: 'yellow',
            bcgColor: 'blue'

        }
    ]
}


function findImage(imgIdx) {
     gImgs.find(gimg => {
        if (imgIdx === gimg.id) {
            gMeme.selectedImgId = gimg.id;
            imgActive = gimg.url
        }
    })
   
}


function goNextLine() {
    (gMeme.selectedLineIdx + 1 > gMeme.lines.length) ? gMeme.selectedLineIdx = 1: gMeme.selectedLineIdx++;

}

function getLineIdx() {
    return gMeme.selectedLineIdx;
}

function showSize(newVal) {
    document.getElementById("size-span").innerHTML = newVal;
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
    lineActive.align = 'left';
}

function alignCenter() {
    lineActive.align = 'center';
    lineActive.positionX = 200;
}

function alignRight() {
    lineActive.align = 'right';
    lineActive.positionX = 390;
}

function fontToggle() {
  if(!isImpact){
      isImpact = true;
      lineActive.font = 'Impact';
  }else{
      isImpact = false;
      lineActive.font = 'Arial';
  }
}



function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = `'my-image${getRndInteger(1,10000)}.jpg'`;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


  function changeStroke() {
    ( lineActive.stroke + 1 > 10) ? lineActive.stroke = 1: lineActive.stroke++;
    console.log(lineActive.stroke);
  }

  function resetStoredText(){
    gMeme.lines.forEach(
        (line) => {
         line.txt = '';
        })

  }