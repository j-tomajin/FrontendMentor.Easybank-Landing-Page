const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.header__nav')

const navToggle = () => {
    nav.classList.toggle('nav-toggle')

    if(!hamburger.src.match('icon-hamburger')) {
        hamburger.src = './images/icon-hamburger.svg'
    } else {
        hamburger.src = './images/icon-close.svg'
    }
}