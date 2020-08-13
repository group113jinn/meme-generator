'use strict'


function init() {
    // document.querySelector('.meme').addEventListener('click',memInit)
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
    
    
    `
    document.querySelector('.gallery-container').innerHTML = ``;
    document.querySelector('.editing-page').innerHTML = strHtml;
}



function getImages() {
    return gImgs;
}

