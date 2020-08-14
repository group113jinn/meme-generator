'use strict'


function init() {
    renderGallery();

}

function renderGallery() {
    var images = getImages()
    var strHtmls = images.map(function(image) {

        return `
        <div>
            <ul>
                <li class="meme">
                <img src=${image.url} onclick="memInit(${image.id})">
                </li>
            </ul>
        </div>
        `

    })
    document.querySelector('.editing-page').innerHTML = ``;
    document.querySelector('.gallery-container').innerHTML = strHtmls.join('');

}


function renderCanvas() {
    var strHtml = `
    <div class="canvas-container">
         <canvas id="mem-canvas" height="400" width="400"></canvas>
         <textarea id="mem-text" cols="35" rows="1" oninput="handleText()"></textarea>
    </div>
    <div class="next-line-wrap">
        <span class="text-line-current" >Current Line: </span><span class="line-current">1</span>
        <button class="next-line"  onclick="onNextLine()">Next Line</button>
    </div>
    <div font-size-container>
    <label for="font-size">Font-size:</label>
    <input type="range" id="font-size" name="size" min="8" max="50" value="40" onchange="showSize(this.value),setSize(this.value)" />
    <span id="size-span">40</span>
    </div>
    <div>
    <button class="line-up" onclick="onLineUp()">Up</button>
    <button class="line-down" onclick="onLineDown()">Down</button>
    </div>
    <div>
    <button class="align-left" onclick="onAlignLeft()">Left</button>
    <button class="align-center" onclick="onAlignCenter()">Center</button>
    <button class="align-right" onclick="onAlignRight()">Right</button>
    </div>
    <div>
    <button class="font" onclick="onFontToggle()">Font</button>
    </div>
    <div>
    <button class="clear" onclick="onResetCanvas()">Clear</button>
    </div>
    <div>
    <button class="stroke" onclick="onChangeStroke()">A</button>
    </div>
    <form onsubmit="setColor(event)">
    <input type="color" id="color-tool" value="#0000ff" hidden >
    <button  onclick="colorUpdate()" class="color-btn">Color</button>
    </form>
    <form onsubmit="setBcgColor(event)">
    <input type="color" id="bcolor-tool" value="#00ff00" hidden >
    <button  onclick="bcgColorUpdate()" class="bcolor-btn">bColor</button>
    </form>
    <div>
    <button class="down"><a href="#" onclick="downloadCanvas(this)" download="">Download</a></button>
    </div>
    
    
    `
    document.querySelector('.gallery-container').innerHTML = ``;
    document.querySelector('.editing-page').innerHTML = strHtml;
}



function getImages() {
    return gImgs;
}

