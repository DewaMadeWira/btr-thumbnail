(() => {
    const mykey = 'isEnabled';

    // const toPromise = (callback) => {
    //     const promise = new Promise((resolve, reject) => {
    //         try {
    //             callback(resolve, reject);
    //         } catch (err) {
    //             reject(err);
    //         }
    //     });
    //     return promise;
    // };

    // let getData = () => {
    //     return toPromise((resolve, reject) => {
    //         chrome.storage.local.get([mykey]).then((result) => {
    //             const enabled = result.isEnabled;
    //             resolve(enabled);
    //         });
    //     });
    // };

    // var enabled = chrome.storage.local.get([mykey]).then((result) => {
    //     const value = result.isEnabled;
    //     // resolve(value);
    // });

    const button = document.getElementById('button');
    // console.log(enabled);
    chrome.storage.local.get([mykey]).then((result) => {
        console.log(result.isEnabled);
        var enabled = result.isEnabled;

        if (result.isEnabled == true) {
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
            console.log('plugin is on');
        } else {
            console.log('Extension turned off');
        }
        button.addEventListener('click', () => {
            chrome.storage.local.set({ isEnabled: !enabled }).then(() => {
                console.log('Value is set to ' + !enabled);
            });
            window.close();
            chrome.tabs.query(
                { active: true, currentWindow: true },
                function (tabs) {
                    chrome.tabs.reload(tabs[0].id);
                }
            );

            //  window.location.reload();
        });
        // console.log('Button pressed');
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
})();
