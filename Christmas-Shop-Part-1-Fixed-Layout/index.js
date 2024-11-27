'use strict';

// burger

let burger = document.querySelector('.burger');
let lineBurger = document.querySelectorAll('.burger > span');

burger.addEventListener('click', () => {
    lineBurger[0].classList.toggle('top-line-burger');
    lineBurger[1].classList.toggle('bottom-line-burger');
})