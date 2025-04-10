const buttons = document.querySelectorAll('.menu-button');

const hoverSound = new Audio('./assets/sounds/hover.mp3');  
const clickSound = new Audio('./assets/sounds/click.mp3');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    button.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});
