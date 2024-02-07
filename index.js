// console.log('hi!');
// const imagePath = 'assets/';
let enabled = true;

// const thumbnailQuery =
//     "ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element),.ytp-videowall-still-image:not([style*='extension:'])";

// const thumbnail = document.querySelectorAll(thumbnailQuery);
// thumbnail.forEach((image) => {
//     if (image.nodeName == 'IMG') {
//         const overlay = document.createElement('img');
//         overlay.src = chrome.runtime.getURL(`assets/ryologo.png`);

//         overlay.style.position = 'absolute';
//         overlay.style.top = '0';
//         overlay.style.left = '0';
//         overlay.style.width = '100%';
//         overlay.style.height = '100%';
//         overlay.style.zIndex = '0';

//         image.style.position = 'relative';
//         image.parentElement.appendChild(overlay);
//     } else if (image.nodeName == 'DIV') {
//         image.style.backgroundImage =
//             `url("${imageUrl}"), ` + image.style.backgroundImage;
//     }
// });

const imgsBw = document.querySelectorAll('.bw');
const imgsBg = document.querySelectorAll('.summary > .no-overflow > img');
const imgs = document.querySelectorAll(
    '.gallery_grid_item.md-card-content > a > img '
);

for (image of imgs) {
    const index = Math.floor(Math.random() * 7);
    image.src = chrome.runtime.getURL(`assets/picture${index}.jpeg`);
}
for (image of imgsBg) {
    image.src = chrome.runtime.getURL(`assets/ryologo.png`);
}
for (image of imgsBw) {
    const index = Math.floor(Math.random() * 7);
    image.src = chrome.runtime.getURL(`assets/picture${index}.jpeg`);
}
