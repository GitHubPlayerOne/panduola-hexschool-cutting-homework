import './assets/scss/all.scss';
AOS.init();
const menu = document.querySelector('.menu')
const menuList = document.querySelector('.menu-list')
menu.addEventListener('click', () => {
    menuList.classList.toggle('d-block')
    menu.classList.toggle('bg-primary')
    menu.classList.toggle('text-secondary')
})
window.addEventListener('resize', () => {
    menuList.classList.remove('d-block')
    menu.classList.remove('bg-primary')
    menu.classList.remove('text-secondary')
})