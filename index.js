setInterval(() => {
    const thumbnailQuery =
        "ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element),.ytp-videowall-still-image:not([style*='extension:'])";

    const thumbnail = document.querySelectorAll(thumbnailQuery);
    thumbnail.forEach((image) => {
        const index = Math.floor(Math.random() * 7);
        if (image.nodeName == 'IMG') {
            const overlay = document.createElement('img');
            overlay.src = chrome.runtime.getURL(`assets/picture${index}.png`);
            overlay.style.position = 'absolute';
            overlay.style.bottom = '0';
            overlay.style.right = '0';
            overlay.style.width = '50%';
            overlay.style.height = '60%';
            overlay.style.zIndex = '0';
            image.style.position = 'relative';
            image.parentElement.appendChild(overlay);
        } else if (image.nodeName == 'DIV') {
            image.style.backgroundImage =
                `url("${imageUrl}"), ` + image.style.backgroundImage;
        }
    });
}, 1000);
