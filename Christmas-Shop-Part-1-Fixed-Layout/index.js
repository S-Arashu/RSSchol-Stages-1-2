'use strict';

// burger

let burger = document.querySelector('.burger');
let lineBurger = document.querySelectorAll('.burger > span');
let burgerMenu = document.querySelector('.burger-menu');
let body = document.querySelector('body');
let navListBurger = document.querySelector('.nav-list-burger');

function openMenu(){
    lineBurger[0].classList.toggle('top-line-burger');
    lineBurger[1].classList.toggle('bottom-line-burger');
    burgerMenu.classList.toggle('open');
    burgerMenu.classList.add('burger-menu-animation');
    body.style.overflow = 'hidden';
    navListBurger.style.left = ((body.clientWidth - navListBurger.clientWidth) / 2) + 'px';
}

function closeMenu(){
    lineBurger[0].classList.remove('top-line-burger');
    lineBurger[1].classList.remove('bottom-line-burger');
    burgerMenu.classList.remove('open');
    burgerMenu.classList.toggle('burger-menu-animation');
}

burger.addEventListener('click', () => {

    openMenu();

    if(!document.querySelector('.open')){
        body.style.overflow = '';
    }
});

burgerMenu.addEventListener('click', (event) => {
    let target = event.target;
    if(target.tagName == 'A' && document.querySelector('.open')){
        closeMenu();
        body.style.overflow = '';
    }
    console.log(target.tagName)
})

// window.addEventListener('resize', (event) => {
//     if(body.offsetWidth > 767 && document.querySelector('.open')){
//         lineBurger[0].classList.remove('top-line-burger');
//         lineBurger[1].classList.remove('bottom-line-burger');
//         burgerMenu.classList.remove('open');
//     } 
// })

window.onresize = function(event) {
    if(body.offsetWidth < 767){
        navListBurger.style.left = ((body.clientWidth - navListBurger.clientWidth) / 2) + 'px';
    } 

    if(body.offsetWidth > 767 && document.querySelector('.open')){
        closeMenu();
    } 
}