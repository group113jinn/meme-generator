'use strict'

console.log('test ms');

var gKeywords = {
   'happy': 12,
   'funny puk': 1
}

var gImgs = [
    {
    id: 1,
    url: 'img/1.jpg',
    keywords: ['trumpy']
},
    {
    id: 2,
    url: 'img/2.jpg',
    keywords: ['happy']
}
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,

    lines: [
        {
            txt: 'I need falafel',
            size: 20,
            align: 'left',
            color: 'red'

        }
    ]
}

