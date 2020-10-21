'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny'] },
    { id: 2, url: 'img/2.jpg', keywords: ['animal'] },
    { id: 3, url: 'img/3.jpg', keywords: ['cute', 'animal'] },
];


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: []
}

function init() {
    if (loadFromStorage('gMeme')) {
        gMeme = loadFromStorage('gMeme')
        console.log(gMeme);
    }
    renderCanvas()
}

function removeLine(idxLine) {
    gMeme.lines.splice(idxLine, 1)
}

function getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}


function renderCanvas() {
    gMeme.selectedLineIdx = 0;
    clearCanvas()
    setBgImg(gMeme.selectedImgId)
    setTimeout(function() {
        gMeme.lines.forEach((line, idx) => {
            console.log(idx);
            drawText(idx)
        })
    }, 100)
}


function setBgImg(imgId) {
    const currImg = getImgById(+imgId)
    console.log(currImg.url);
    drawImg(currImg.url)
}

function drawImg(imgUrl) {
    var img = new Image()
    img.src = `./${imgUrl}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
    saveToStorage('gMeme', gMeme)
}

function drawText(selectedLineIdx, x = 250, y = 50) {
    const text = gMeme.lines[selectedLineIdx].text;
    console.log(text);
    const size = gMeme.lines[selectedLineIdx].size
    console.log(size);
    const align = gMeme.lines[selectedLineIdx].align;
    const strokeColor = gMeme.lines[selectedLineIdx].strokeColor;
    const fillColor = gMeme.lines[selectedLineIdx].fillColor;
    const font = gMeme.lines[selectedLineIdx].font
    gCtx.strokeStyle = strokeColor
    gCtx.fillStyle = fillColor
    gCtx.lineWidth = '2'
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = align
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    gMeme.selectedLineIdx++;
    saveToStorage('gMeme', gMeme)
}

function toMemeEditor(className) {
    const elPrevLink = document.querySelector('.active');
    elPrevLink.classList.remove('active')
    const elEditor = document.querySelector('.meme-editor')
    elEditor.style.display = 'flex';
    const elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none';
    const elAbout = document.querySelector('.about')
    elAbout.style.display = 'none';
    // renderCanvas(className.split(' ')[1])
    gMeme.selectedImgId = className.split(' ')[1]
    setBgImg(className.split(' ')[1])
    renderCanvas()
}

function toGallery(elLink) {
    const elPrevLink = document.querySelector('.active');
    if (elPrevLink) elPrevLink.classList.remove('active')
    elLink.classList.add('active');
    const elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'block';
    const elEditor = document.querySelector('.meme-editor')
    elEditor.style.display = 'none';
    const elAbout = document.querySelector('.about')
    elAbout.style.display = 'none';

}

function toAbout(elLink) {
    const elPrevLink = document.querySelector('.active');
    if (elPrevLink) elPrevLink.classList.remove('active')
    elLink.classList.add('active');
    const elEditor = document.querySelector('.meme-editor')
    elEditor.style.display = 'none';
    const elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none';
    const elAbout = document.querySelector('.about')
    elAbout.style.display = 'block';
}