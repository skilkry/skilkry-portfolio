import { playIntroAnimation } from './introAnim.js';
import { animateText } from './textAnim.js';
import { moveEyesAndSmile } from './register.js';

window.addEventListener('load', () => {
    if (document.querySelector('.intro-animation')) {
        playIntroAnimation();
    }
    
    if (document.getElementById('text-container-animated')) {
        animateText();
    }
});


document.addEventListener('DOMContentLoaded', moveEyesAndSmile);