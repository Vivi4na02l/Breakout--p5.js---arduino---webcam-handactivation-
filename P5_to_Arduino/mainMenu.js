//* dimensions for mainMenu div */
document.querySelector('#mainMenu').style.width = window.innerWidth + 'px';
document.querySelector('#mainMenu').style.height = window.innerHeight + 'px';

//* dimensions for play button */
document.querySelector('#btnPlay').style.width = window.innerWidth/4 + 'px';

//* dimensions for divControls div */
document.querySelector('#divControls').style.width = window.innerWidth/4 + 'px';


//* event listener or buttons */
/* clicking on the play button will hide the main menu */
document.querySelector('#btnPlay').addEventListener('click', e => {
    document.querySelector('#mainMenu').style.display = 'none';
})