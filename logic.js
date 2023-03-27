var toggle = 0;

document.getElementById('play').addEventListener('click', () => {
    window.location.reload()
});

document.getElementById('switch').addEventListener('click', () => {
    if(toggle == 0) {
        toggle = 1;
        themeSwitch();
    }
    else {
        toggle = 0;
        themeSwitch();
    }
});

function themeSwitch() {
    if (toggle == 0) {
        document.documentElement.setAttribute('data-theme', 'root');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}