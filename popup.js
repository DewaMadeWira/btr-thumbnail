var button = document.getElementById('button');

// chrome.runtime.onMessage.addListener((msg, sender, res) => {
//     console.log(msg);
//     button.innerText = msg.isEnabled;
// });
var isExtensionOn = false;

button.addEventListener('click', () => {
    console.log('hello');
    chrome.runtime.sendMessage({
        cmd: 'setOnOffState',
        data: { value: isExtensionOn },
    });
});

//GET VARIABLE
chrome.runtime.sendMessage({ cmd: 'isAutoFeedMode' }, function (response) {
    if (response == true) {
        //Run the rest of your content-script in here..
    }
});
