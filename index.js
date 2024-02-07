console.log('hi!');
// const imagePath = 'assets/';
var enabled = false;

const thumbnailQuery =
    "ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element),.ytp-videowall-still-image:not([style*='extension:'])";

const thumbnail = document.querySelectorAll(thumbnailQuery);
thumbnail.forEach((image) => {
    if (image.nodeName == 'IMG') {
        const overlay = document.createElement('img');
        overlay.src = chrome.runtime.getURL(`assets/ryologo.png`);

        overlay.style.position = 'absolute';
        overlay.style.bottom = '0';
        overlay.style.right = '0';
        overlay.style.width = '40%';
        overlay.style.height = '50%';
        overlay.style.zIndex = '0';

        image.style.position = 'relative';
        image.parentElement.appendChild(overlay);
    } else if (image.nodeName == 'DIV') {
        image.style.backgroundImage =
            `url("${imageUrl}"), ` + image.style.backgroundImage;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    // console.log(enabled + ' init');
    // const enabled = document.getElementById('enabled');
    // chrome.action.onClicked.addListener((tab) => {
    button.addEventListener('click', () => {
        // chrome.scripting.executeScript({
        //     target: { tabId: tab.id },
        //     files: ['index.js'],
        // });
        // enabled = !enabled;
        // console.log(enabled);
        const mykey = 'mamamia';
        chrome.storage.local.set({ mamamia: 'false' }).then(() => {
            console.log('Value is set');
        });
        chrome.storage.local.get([mykey]).then((result) => {
            console.log(result.mamamia);
        });
        console.log(chrome.storage);
        console.log('Button pressed');
    });
    // });
});

// const imgsBw = document.querySelectorAll('.bw');
// const imgsBg = document.querySelectorAll('.summary > .no-overflow > img');
// const imgs = document.querySelectorAll(
//     '.gallery_grid_item.md-card-content > a > img '
// );

// for (image of imgs) {
//     const index = Math.floor(Math.random() * 7);
//     image.src = chrome.runtime.getURL(`assets/picture${index}.jpeg`);
// }
// for (image of imgsBg) {
//     image.src = chrome.runtime.getURL(`assets/ryologo.png`);
// }
// for (image of imgsBw) {
//     const index = Math.floor(Math.random() * 7);
//     image.src = chrome.runtime.getURL(`assets/picture${index}.jpeg`);
// }
