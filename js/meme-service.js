'use strict'




var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,

    lines: [

        {
            id: 1,
            positionY: 70,
            positionX: 10,
            txt: '',
            fontSize: 30,
            align: 'left',
            color: 'yellow',
            bcgColor: 'green'

        },
        {
            id: 2,
            positionY: 230,
            positionX: 10,
            txt: '',
            fontSize: 30,
            align: 'left',
            color: 'green',
            bcgColor: 'violet'

        },

        {

            id: 3,
            positionY: 390,
            positionX: 10,
            txt: '',
            fontSize: 30,
            align: 'left',
            color: 'yellow',
            bcgColor: 'green'

        }
    ]
}


function findImage(imgIdx) {
    const img = new Image();
    var obj = gImgs.find(gimg => {
        if (imgIdx === gimg.id) {
            gMeme.selectedImgId = gimg.id;
            return gimg
        }
    })
    img.src = obj.url
    img.onload = () => {
        bcgActive = img;
        gCtx.drawImage(bcgActive, 0, 0, gCanvas.width, gCanvas.height);
    }
}





function goNextLine() {
    (gMeme.selectedLineIdx + 1 >= gMeme.lines.length) ? gMeme.selectedLineIdx = 0: gMeme.selectedLineIdx++;

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