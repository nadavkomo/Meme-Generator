'use strict'

var gCanvas;
var gCtx;


function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
}



function onDrawText() {
    gMeme.lines[gMeme.selectedLineIdx] = {};
    const text = document.querySelector('.box-editor input[name=text-line]').value;
    gMeme.lines[gMeme.selectedLineIdx]['text'] = text;
    const size = document.querySelector('.box-editor input[name=text-size]').value;
    gMeme.lines[gMeme.selectedLineIdx]['size'] = size;
    const strokeColor = document.querySelector('.box-editor input[name=text-strokeColor]').value;
    gMeme.lines[gMeme.selectedLineIdx]['strokeColor'] = strokeColor;
    const fillColor = document.querySelector('.box-editor input[name=text-fillColor]').value;
    gMeme.lines[gMeme.selectedLineIdx]['fillColor'] = fillColor;
    const align = document.querySelector('.box-editor select[id=text-align]').value
    gMeme.lines[gMeme.selectedLineIdx]['align'] = align;
    const font = document.querySelector('.box-editor select[id=text-font]').value
    gMeme.lines[gMeme.selectedLineIdx]['font'] = font;
    drawText(gMeme.selectedLineIdx)
        // renderCanvas()
}


// function onTextMove(e) {
//     e.preventDefault();
//     if (e.buttons === 0) return
//     console.log(e);
//     var offsetX = e.offsetX
//     var offsetY = e.offsetY
//     if (e.type === 'touchmove') {
//         var bcr = e.target.getBoundingClientRect();
//         offsetX = e.targetTouches[0].clientX - bcr.x;
//         offsetY = e.targetTouches[0].clientY - bcr.y;
//     }
//     setInterval(drawText(0, offsetX, offsetY), 1000)
// }

// function onMoveText(e) {
//     e.preventDefault();
//     var offsetX = e.offsetX
//     var offsetY = e.offsetY
//     if (e.type === 'touchmove') {
//         var bcr = e.target.getBoundingClientRect();
//         offsetX = e.targetTouches[0].clientX - bcr.x;
//         offsetY = e.targetTouches[0].clientY - bcr.y;
//     }
//     setInterval(drawText(0, offsetX, offsetY), 5000)
// }

















function toggleMenu() {
    var elNavBar = document.querySelector('.nav-bar');
    if (elNavBar.className === 'nav-bar') {
        elNavBar.className += " responsive";
    } else {
        elNavBar.className = "nav-bar";
    }
}