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
    if(target.attributes[0].nodeValue.startsWith("#")){
        closeMenu();
        body.style.overflow = '';
        burgerMenu.classList.add('burger-menu-animation');
    }
})

// window.addEventListener('resize', (event) => {
//     if(body.offsetWidth > 767 && document.querySelector('.open')){
//         lineBurger[0].classList.remove('top-line-burger');
//         lineBurger[1].classList.remove('bottom-line-burger');
//         burgerMenu.classList.remove('open');
//     } 
// })

// slider

let slider = document.querySelector('.slider');
let sliderWrapper = document.querySelector('.slider-wrapper');
let sliderImgs = document.querySelector('.slider-imgs');
let sliderLeftBtn = document.querySelector('.slider-left-btn');
let sliderRightBtn = document.querySelector('.slider-right-btn');
let right;
let rightMove = 0;
let marginLeft = sliderImgs.offsetLeft;
let scroll = sliderImgs.scrollWidth;

if(body.offsetWidth > 767){
        right = (Math.round(sliderWrapper.scrollWidth) - Math.round(sliderImgs.clientWidth)) / 3;
    } 

if(body.offsetWidth <= 767){
        right = (Math.round(sliderWrapper.scrollWidth) - Math.round(sliderImgs.clientWidth)) / 6;
}

window.onresize = function(event) {

    // navListBurger.style.left = 0 + 'px';

    if(body.offsetWidth < 767){
        navListBurger.style.left = ((body.clientWidth - navListBurger.clientWidth) / 2) + 'px';
    } 

    sliderWrapper.style.right = 0 + 'px';
    rightMove = 0;
    sliderLeftBtn.classList.add('disabled');
    sliderRightBtn.classList.remove('disabled');
    // right = 0;

    if(body.offsetWidth > 767){
        right = (Math.round(sliderWrapper.scrollWidth) - Math.round(sliderImgs.clientWidth)) / 3;
    } 

    if(body.offsetWidth <= 767){
        right = (Math.round(sliderWrapper.scrollWidth) - Math.round(sliderImgs.clientWidth)) / 6;
    }

    // if(body.offsetWidth <= 767 && window.scrollY > 300){
    //     let btnUp = document.querySelector('.btn-up');
    //     btnUp.style.display = 'flex';
    // }
}

sliderRightBtn.addEventListener('click', () => {
    rightMove += right;
    sliderWrapper.style.right = rightMove + 'px';
    sliderLeftBtn.classList.remove('disabled');

    if(rightMove + slider.clientWidth > scroll){
        sliderWrapper.style.right = Math.round(sliderWrapper.scrollWidth) - Math.round(sliderImgs.clientWidth) + marginLeft + 'px';
        sliderRightBtn.classList.add('disabled');
        // sliderImgs.style.marginRight = 1 + '%';
        
    }
})

sliderLeftBtn.addEventListener('click', () => {
    rightMove -= right;
    sliderWrapper.style.right = rightMove + 'px';
    sliderRightBtn.classList.remove('disabled');

    if(rightMove <= 0){
        // sliderWrapper.style.right = sliderWrapper.clientWidth + 'px';
        sliderLeftBtn.classList.add('disabled');
        
    }
})

// time

let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

timer();
setInterval(timer, 1000);

function timer(){
    let now = new Date();
    let newYear = new Date(
    now.getUTCFullYear() + 1,
    0,
    1,
    0,
    0,
    0,
    );

    let timeLeft = Math.ceil((newYear - now) / 1000);

    let daysLeft = countTime(timeLeft, 60 * 60 * 24);
    let hoursLeft = countTime(daysLeft.diff, 60 * 60);
	let minutesLeft = countTime(hoursLeft.diff, 60);
	let secondsLeft = countTime(minutesLeft.diff, 1);
	
	days.innerHTML = daysLeft.value;
    hours.innerHTML = hoursLeft.value;
    min.innerHTML = minutesLeft.value;
    sec.innerHTML = secondsLeft.value;
}

function countTime(timeLeft, exp){
    let value = Math.floor(timeLeft / exp);
    let diff = timeLeft % exp;

    return {
        value: value,
        diff: diff,
    }
}

// random gifts

let path = './gifts.json';
let bestGiftsItems = document.querySelector('.best-gifts-items');
let imgPath;


fetch(path)
.then(response => response.json())
.then(gifts => {

    function random(arr) {
    arr.sort(() => Math.random() - 0.5);
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
    }
    }

    let giftsInfo = random(gifts);
    

    repeat: for(let i=0; i<4; i++){

        let num = Math.floor(Math.random() * 36);
        let categoryItem = giftsInfo[num].category.split(' ');

        
        if(giftsInfo[num].category == 'For Work'){
            imgPath = 'ball-1';
        };

        if(giftsInfo[num].category == 'For Health'){
            imgPath = 'ball-2';
        };

        if(giftsInfo[num].category == 'For Harmony'){
            imgPath = 'ball-3';
        };

        let giftCard = document.createElement('div');
        giftCard.classList.add('best-gifts-cards');
        giftCard.innerHTML = `
            <img src="./assets/img/${imgPath}.png" alt="Gift">
            <div class="best-gifts-desc">
                <span class="best-gifts-rubric ${categoryItem[1]}">${giftsInfo[num].category}</span>
                <span class="best-gifts-name">${giftsInfo[num].name}</span>
            </div>
        `
        bestGiftsItems.append(giftCard);
    }
})

// btn-up

let btnUp = document.querySelector('.btn-up');

window.addEventListener('scroll', () => {
    if(body.offsetWidth <= 767 && window.scrollY > 300){
        btnUp.style.display = 'flex';
    }

    if(body.offsetWidth > 767 || window.scrollY <= 300){
        btnUp.style.display = 'none';
    }
});

btnUp.addEventListener('click', () => {
    window.scrollTo(0,0);
})