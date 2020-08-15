'use strict'


function init() {
    renderGallery();

}

function renderGallery() {
    var images = getImages()
    var strHtmls = images.map(function(image) {

        return `
        <div class="meme">
                <img src=${image.url} onclick="memInit(${image.id})">
        </div>
        `

    })
    document.querySelector('.editing-page').innerHTML = ``;
    document.querySelector('.container').innerHTML = strHtmls.join('');
    document.querySelector('.ad-container').innerHTML =
        `<div class="ad-center">
    <div class="ad-img-container">
        <img src="img/geller.png" alt="trivia" class="ad-img">
    </div>

    <div class="ad-plot">
        <h1>Monica Geller</h1>
        <p>is a fictional character,one of the six main characters who appears on the American sitcom Friends</p>
        <div class="social-container"></div>
    </div>
</div>`;
    document.querySelector('.ad-container').style.display = 'initial';

}


function renderCanvas() {
    var strHtml = `
    <div class="edit-wrap">
    <div class="canvas-container">
         <canvas id="mem-canvas" height="400" width="400"></canvas>
       
    </div>

 
    <div class="control-container">

    <div class="box text-wrap">
        <textarea id="mem-text" cols="25" rows="1" oninput="handleText()"></textarea>
    </div>

    <div class="box next-line-wrap">
        <span class="text-line-current" >Current Line: </span><span class="line-current">1</span>
        <button class="next-line"  onclick="onNextLine()"></button>
    </div>

    <div class="box font-size-wrap">
    <label for="font-size">Font-size:</label><span id="size-span">40</span>
    <input type="range" id="font-size" name="size" min="8" max="50" value="40" onchange="showSize(this.value),setSize(this.value)" />
   
    </div>

    <div class="box line-up-wrap">
    <button class="line-up" onclick="onLineUp()"></button>
    </div>

    <div class="box line-down-wrap">
    <button class="line-down" onclick="onLineDown()"></button>
    </div>

    <div class="box align-left-wrap">
    <button class="align-left" onclick="onAlignLeft()"></button>
    </div>

    <div class="box align-center-wrap">
    <button class="align-center" onclick="onAlignCenter()"></button>
    </div>

    <div class="box align-right-wrap">
    <button class="align-right" onclick="onAlignRight()"></button>
    </div>

    <div class="box font-wrap">
    <button class="font" onclick="onFontToggle()"></button>
    </div>

    <div class="box clear-wrap">
    <button class="clear" onclick="onResetCanvas()"></button>
    </div>

    <div class="box stroke-wrap">
    <button class="stroke" onclick="onChangeStroke()"></button>
    </div>

    <form class=" box color-wrap" onsubmit="setColor(event)">
    <input type="color" id="color-tool" value="#0000ff" hidden >
    <button  onclick="colorUpdate()" class="color-btn"></button>
    </form>

    <form class="box bcgcolor-wrap" onsubmit="setBcgColor(event)">
    <input type="color" id="bcolor-tool" value="#00ff00" hidden >
    <button  onclick="bcgColorUpdate()" class="bcolor-btn"></button>
    </form>
    
    <div class="box download-wrap">
    <button class="down"><a href="#" onclick="downloadCanvas(this)" download=""></a></button>
    </div>
    </div>
    </div>

    `
    document.querySelector('.ad-container').innerHTML = ``;
    document.querySelector('.ad-container').style.display = 'none';
    document.querySelector('.container').innerHTML = ``;
    document.querySelector('.editing-page').innerHTML = strHtml;
}



function getImages() {
    return gImgs;
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}