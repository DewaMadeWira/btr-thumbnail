document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');

    const enabled = document.getElementById('enabled');
    button.addEventListener('click', () => {
        console.log(enabled);
        console.log('Button pressed');
    });
});
