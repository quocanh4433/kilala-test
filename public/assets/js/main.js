function toggleMenu() {
    let overlay = document.querySelector('.overlay');
    let nav =  document.querySelector('.nav--mobile');
    let menu = document.querySelector('.hamburger');
    menu.classList.toggle('hamburger--active');
    overlay.classList.toggle('overlay--active')
    nav.classList.toggle('nav--active')

    // let submenu = document.querySelector('.header__subnav');
    // let logo = document.querySelector('.header__logo');
    // let body = document.querySelector('body');
    // submenu.classList.toggle('subnav-active');
    // logo.classList.toggle('logo-hidden');   
    // body.classList.toggle('body-unscroll');   
}