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
    };
});

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

    // function random(arr) {
    // arr.sort(() => Math.random() - 0.5);
    // for (let i = arr.length - 1; i > 0; i--) {
    //     let j = Math.floor(Math.random() * (i + 1));
    //     [arr[i], arr[j]] = [arr[j], arr[i]];
    //     return arr;
    // }
    // }

    let giftsInfo = gifts;
    

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
        giftCard.id = giftsInfo[num].id;
        giftCard.innerHTML = `
            <img src="./assets/img/${imgPath}.png" alt="Gift">
            <div class="best-gifts-desc">
                <span class="best-gifts-rubric ${categoryItem[1]}">${giftsInfo[num].category}</span>
                <span class="best-gifts-name">${giftsInfo[num].name}</span>
            </div>
        `
        bestGiftsItems.append(giftCard);
    }

    // modal

    bestGiftsItems.addEventListener('click', (event) => {
        body.style.overflow = 'hidden';
        let target = event.target;
        let id = target.parentElement.id || target.parentElement.parentElement.id;
        let modalBg = document.createElement('div');
        modalBg.classList.add('modal-bg');
        let categoryItem = gifts[id].category.split(' ');

        console.log(target.parentElement.id)
        console.log(id)
        console.log(gifts[18])

        if(gifts[id].category == 'For Work'){
            imgPath = 'ball-1';
        };

        if(gifts[id].category == 'For Health'){
            imgPath = 'ball-2';
        };

        if(gifts[id].category == 'For Harmony'){
            imgPath = 'ball-3';
        };

        let modal = document.createElement('div');
        modal.classList.add('best-gifts-cards');
        modal.classList.add('modal');
        modal.setAttribute('disabled', 'true')
        modal.innerHTML = `
            <img src="./assets/img/${imgPath}.png" alt="Gift">
            <div class="close">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div class="best-gifts-desc">
                <span class="best-gifts-rubric ${categoryItem[1]}">${gifts[id].category}</span>
                <span class="best-gifts-name">${gifts[id].name}</span>
                <span class="best-gifts-about">${gifts[id].description}</span>
                <span class="best-gifts-rating">Adds superpowers to:</span>
                <div class="rating-list">
                    <div class="rating-names">
                        <span>Live</span>
                        <span>Create</span>
                        <span>Love</span>
                        <span>Dream</span>
                    </div>
                    <div class="rating-value">
                        <span>${gifts[id].superpowers.live}</span>
                        <span>${gifts[id].superpowers.create}</span>
                        <span>${gifts[id].superpowers.love}</span>
                        <span>${gifts[id].superpowers.dream}</span>
                    </div>
                    <div class="rating-snow">
                    </div>
                </div>
            </div>
        `

        body.prepend(modalBg);
        modalBg.prepend(modal);

        let ratingSnow = document.querySelector('.rating-snow');
        let ratingCountLive = gifts[id].superpowers.live.split('')[1];
        let ratingCountCreate = gifts[id].superpowers.create.split('')[1];
        let ratingCountLove = gifts[id].superpowers.love.split('')[1];
        let ratingCountDream = gifts[id].superpowers.dream.split('')[1];

        let ratings = [ratingCountLive, ratingCountCreate, ratingCountLove, ratingCountDream];

            for(let k=0; k<ratings.length; k++){

                let snows = document.createElement('div');
                snows.classList.add('snowLine');
                ratingSnow.append(snows);

                    for(let i=0; i<ratings[k]; i++){

                        let snowItem = document.createElement('svg');
                        snowItem.classList.add('snows');
                        snowItem.setAttribute("width", "14");
                        snowItem.setAttribute("height", "160");
                        snowItem.setAttribute("viewBox", "0 0 14 16");
                        snowItem.setAttribute("fill", "none");
                        snowItem.setAttribute("xmlns", "http://www.w3.org/2000/svg");

                        snowItem.innerHTML = `
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1959 9.88162L10.6482 9.56542L12.1158 9.17219L11.8732 8.26704L9.50055 8.90278L8.38146 8.25667C8.39689 8.17336 8.40538 8.08765 8.40538 7.99997C8.40538 7.91229 8.39692 7.82655 8.38146 7.74327L9.50055 7.09716L11.8732 7.7329L12.1158 6.82775L10.6482 6.43452L11.1959 6.11831L13.546 5.97725L13.8921 4.02063L12.0246 3.34203L10.7274 5.30677L10.1797 5.62297L10.5729 4.15545L9.66778 3.91293L9.03204 6.28561L7.91226 6.93211C7.78247 6.82103 7.63242 6.73313 7.4683 6.67494V5.3828L9.20521 3.64586L8.5426 2.98325L7.46827 4.05755V3.42515L8.51792 1.32584L6.99976 0L5.48157 1.3259L6.53122 3.42521V4.05761L5.45689 2.98332L4.79429 3.64592L6.53119 5.38286V6.675C6.36708 6.73319 6.21702 6.82109 6.08724 6.93217L4.96746 6.28568L4.33171 3.91299L3.42656 4.15551L3.81979 5.62304L3.27213 5.30684L1.9749 3.34209L0.107422 4.02069L0.453485 5.97731L2.80362 6.11838L3.35128 6.43458L1.88375 6.82781L2.1263 7.73296L4.49898 7.09722L5.61807 7.74333C5.60264 7.82664 5.59414 7.91235 5.59414 8.00003C5.59414 8.08771 5.60261 8.17345 5.61807 8.25673L4.49898 8.90285L2.1263 8.2671L1.88375 9.17226L3.35128 9.56548L2.80362 9.88169L0.453485 10.0227L0.107422 11.9793L1.97493 12.6579L3.27216 10.6932L3.81985 10.377L3.42662 11.8445L4.33177 12.087L4.96752 9.71435L6.0873 9.06786C6.21708 9.17894 6.36714 9.26684 6.53125 9.32503V10.6172L4.79435 12.3541L5.45696 13.0167L6.53129 11.9424V12.5748L5.48163 14.6741L6.99983 16L8.51802 14.6741L7.46837 12.5748V11.9424L8.5427 13.0167L9.2053 12.3541L7.4684 10.6172V9.32503C7.63251 9.26684 7.78257 9.17894 7.91235 9.06786L9.03213 9.71435L9.66788 12.087L10.573 11.8445L10.1798 10.377L10.7275 10.6932L12.0247 12.6579L13.8922 11.9793L13.5462 10.0227L11.1959 9.88162Z" fill="#FF4646" />
                            </svg>
                        `
                        snows.prepend(snowItem);
                    }

                    if(5-ratings[k] != 0){

                        for(let i=0; i<5-ratings[k]; i++){

                        let snowItemOpacity = document.createElement('svg');
                        snowItemOpacity.classList.add('snows');
                        snowItemOpacity.setAttribute("width", "14");
                        snowItemOpacity.setAttribute("height", "160");
                        snowItemOpacity.setAttribute("viewBox", "0 0 14 16");
                        snowItemOpacity.setAttribute("fill", "none");
                        snowItemOpacity.setAttribute("xmlns", "http://www.w3.org/2000/svg");

                        snowItemOpacity.innerHTML = `
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1959 9.88162L10.6482 9.56542L12.1158 9.17219L11.8732 8.26704L9.50055 8.90278L8.38146 8.25667C8.39689 8.17336 8.40538 8.08765 8.40538 7.99997C8.40538 7.91229 8.39692 7.82655 8.38146 7.74327L9.50055 7.09716L11.8732 7.7329L12.1158 6.82775L10.6482 6.43452L11.1959 6.11831L13.546 5.97725L13.8921 4.02063L12.0246 3.34203L10.7274 5.30677L10.1797 5.62297L10.5729 4.15545L9.66778 3.91293L9.03204 6.28561L7.91226 6.93211C7.78247 6.82103 7.63242 6.73313 7.4683 6.67494V5.3828L9.20521 3.64586L8.5426 2.98325L7.46827 4.05755V3.42515L8.51792 1.32584L6.99976 0L5.48157 1.3259L6.53122 3.42521V4.05761L5.45689 2.98332L4.79429 3.64592L6.53119 5.38286V6.675C6.36708 6.73319 6.21702 6.82109 6.08724 6.93217L4.96746 6.28568L4.33171 3.91299L3.42656 4.15551L3.81979 5.62304L3.27213 5.30684L1.9749 3.34209L0.107422 4.02069L0.453485 5.97731L2.80362 6.11838L3.35128 6.43458L1.88375 6.82781L2.1263 7.73296L4.49898 7.09722L5.61807 7.74333C5.60264 7.82664 5.59414 7.91235 5.59414 8.00003C5.59414 8.08771 5.60261 8.17345 5.61807 8.25673L4.49898 8.90285L2.1263 8.2671L1.88375 9.17226L3.35128 9.56548L2.80362 9.88169L0.453485 10.0227L0.107422 11.9793L1.97493 12.6579L3.27216 10.6932L3.81985 10.377L3.42662 11.8445L4.33177 12.087L4.96752 9.71435L6.0873 9.06786C6.21708 9.17894 6.36714 9.26684 6.53125 9.32503V10.6172L4.79435 12.3541L5.45696 13.0167L6.53129 11.9424V12.5748L5.48163 14.6741L6.99983 16L8.51802 14.6741L7.46837 12.5748V11.9424L8.5427 13.0167L9.2053 12.3541L7.4684 10.6172V9.32503C7.63251 9.26684 7.78257 9.17894 7.91235 9.06786L9.03213 9.71435L9.66788 12.087L10.573 11.8445L10.1798 10.377L10.7275 10.6932L12.0247 12.6579L13.8922 11.9793L13.5462 10.0227L11.1959 9.88162Z" fill="#FF4646" fill-opacity="0.1" />
                            </svg>
                        `
                        snows.append(snowItemOpacity);
                    }

                    }
                    
                }

        let modalWindow = document.querySelector('.modal-bg');

console.log(modalWindow)

if(modalWindow){
    modalWindow.addEventListener('click', (event) => {
    let target = event.target;

    if(target.parentElement.className == 'close' || target.parentElement.parentElement.className == 'close' || target.className == 'modal-bg'){
        modalWindow.remove();
        body.style.overflow = '';
    }
})
}
    })
})

// btn-up

let btnUp = document.querySelector('.btn-up');

window.addEventListener('scroll', () => {
    if(body.offsetWidth <= 768 && window.scrollY > 300){
        btnUp.style.display = 'flex';
    }

    if(body.offsetWidth > 768 || window.scrollY <= 300){
        btnUp.style.display = 'none';
    }
});

btnUp.addEventListener('click', () => {
    window.scrollTo(0,0);
})