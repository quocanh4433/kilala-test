function toggleMenu() {
    let overlay = document.querySelector('.overlay');
    let nav =  document.querySelector('.nav--mobile');
    let menu = document.querySelector('.hamburger');
    menu.classList.toggle('hamburger--active');
    overlay.classList.toggle('overlay--active')
    nav.classList.toggle('nav--active')
}




const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
const underline = document.querySelector('.underline');

function updateUnderline() {
  const activeTab = document.querySelector('.tab.active');
  underline.style.width = `${activeTab.offsetWidth + 3}px`;
  underline.style.left = `${activeTab.offsetLeft - 2}px`;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    contents.forEach(content => {
      if (content.id === target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    updateUnderline();
  });
});

window.addEventListener('resize', updateUnderline);
updateUnderline();
