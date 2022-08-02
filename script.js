const btnMobile = document.querySelector('.btn-mobile');

function toggleMenu(event) {
    if(event.type === 'touchstart'){
        event.preventDefault();
    }
    const nav = document.querySelector('.nav');
    const home = document.querySelector('.home');
    nav.classList.toggle('active');
    home.classList.toggle('home-active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);