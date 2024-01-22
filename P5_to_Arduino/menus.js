//* javascript for css dimensions */
/* dimensions for mainMenu div */
document.querySelector('#mainMenu').style.width = window.innerWidth + 'px';
document.querySelector('#mainMenu').style.height = window.innerHeight + 'px';

/* dimensions for calibrationScreen div */
document.querySelector('#calibrationScreen').style.width = window.innerWidth + 'px';
document.querySelector('#calibrationScreen').style.height = window.innerHeight*0.8 + 'px';
document.querySelector('#calibrationScreen').style.paddingTop = window.innerHeight*0.1 + 'px';

/* dimensions for play button */
document.querySelector('#btnPlay').style.width = window.innerWidth*0.25 + 'px';
document.querySelector('#btnPlay').style.height = window.innerHeight*0.12 + 'px';

/* dimensions for divControls div */
document.querySelector('#divControls').style.width = window.innerWidth*0.25 + 'px';
document.querySelector('#divControls').style.marginTop = window.innerWidth*0.025 + 'px';

/* dimensions for each controls button */
document.querySelector('#btnJoystick').style.width = window.innerWidth*0.1 + 'px';
document.querySelector('#btnJoystick').style.height = window.innerWidth*0.1 + 'px';

document.querySelector('#btnHand').style.width = window.innerWidth*0.1 + 'px';
document.querySelector('#btnHand').style.height = window.innerWidth*0.1 + 'px';

/* dimensions for return button */
document.querySelector('#btnReturn').style.width = window.innerWidth*0.1 + 'px';
document.querySelector('#btnReturn').style.height = window.innerWidth*0.025 + 'px';
document.querySelector('#btnReturn').style.left = window.innerWidth*0.025 + 'px';
document.querySelector('#btnReturn').style.top = window.innerWidth*0.025 + 'px';

/* dimensions for line calibration divs */
document.querySelector('#divLines').style.width = window.innerWidth*0.8 + 'px';
document.querySelector('#divLines').style.marginTop = window.innerHeight*0.5 + 'px';
document.querySelector('#lineLeft').style.width = window.innerWidth*0.2 + 'px';
document.querySelector('#lineRight').style.width = window.innerWidth*0.2 + 'px';



//* event listener for buttons */
/* clicking on the play button will hide the main menu */
document.querySelector('#btnPlay').addEventListener('click', e => {
    document.querySelector('#mainMenu').style.display = 'none';
})

/* clicking on the hand button will show the player the hand calibration screen */
document.querySelector('#btnHand').addEventListener('click', e => {
    document.querySelector('#mainMenu').style.display = 'none';
    document.querySelector('#calibrationScreen').style.display = 'flex';
})

/* clicking on the return button will take the player back to the main menu */
document.querySelector('#btnReturn').addEventListener('click', e => {
    document.querySelector('#mainMenu').style.display = 'flex';
    document.querySelector('#calibrationScreen').style.display = 'none';
})