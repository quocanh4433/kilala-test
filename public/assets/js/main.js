function toggleMenu() {
    let overlay = document.querySelector('.overlay');
    let nav =  document.querySelector('.nav--mobile');
    let menu = document.querySelector('.hamburger');
    menu.classList.toggle('hamburger--active');
    overlay.classList.toggle('overlay--active')
    nav.classList.toggle('nav--active')
}
