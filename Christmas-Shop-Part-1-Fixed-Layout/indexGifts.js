'use strict';

let path = '../gifts.json';
let bestGiftsCards = document.querySelector('.gifts-items');
let giftsFilter = document.querySelector('.gifts-filter');
let giftFilterItem = document.querySelectorAll('.gift-filter-item');
let imgPath;
let filter = 'All';
let filteredArrWork = [];
let filteredArrHealth = [];
let filteredArrHarmony = [];



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

    createGifts(giftsInfo);

    for(let k=0; k<giftsInfo.length; k++){
        if(giftsInfo[k].category == 'For Work'){
            filteredArrWork.push(giftsInfo[k]);
        };

        if(giftsInfo[k].category == 'For Health'){
            filteredArrHealth.push(giftsInfo[k]);
        };

        if(giftsInfo[k].category == 'For Harmony'){
            filteredArrHarmony.push(giftsInfo[k]);
        };
    }

    function createGifts(arr){

        repeat: for(let i=0; i<arr.length; i++){

            let num = Math.floor(Math.random() * arr.length);
            let categoryItem = arr[num].category.split(' ');

            if(arr[num].category == 'For Work'){
                imgPath = 'ball-1';
            }

            if(arr[num].category == 'For Health'){
                imgPath = 'ball-2';
            }

            if(arr[num].category == 'For Harmony'){
                imgPath = 'ball-3';
            }

            let giftCard = document.createElement('div');
            giftCard.classList.add('best-gifts-cards');
            giftCard.innerHTML = `
                <img src="../assets/img/${imgPath}.png" alt="Gift">
                <div class="best-gifts-desc">
                    <span class="best-gifts-rubric ${categoryItem[1]}">${arr[num].category}</span>
                    <span class="best-gifts-name">${giftsInfo[num].name}</span>
                </div>
            `
            bestGiftsCards.append(giftCard);
        }
    }
    

    giftsFilter.addEventListener('click', (event) => {
        let target = event.target;
        filter = target.innerHTML;

        giftFilterItem.forEach((item) => {
            item.classList.remove('gifts-active');
        });

        target.classList.add('gifts-active');

        if(filter == 'All'){
            bestGiftsCards.innerHTML = '';
            createGifts(giftsInfo);
        };

        if(filter == 'for work'){
            bestGiftsCards.innerHTML = '';
            createGifts(filteredArrWork);
        };

        if(filter == 'for health'){
            bestGiftsCards.innerHTML = '';
            createGifts(filteredArrHealth);
        };

        if(filter == 'for harmony'){
            bestGiftsCards.innerHTML = '';
            createGifts(filteredArrHarmony);
        };
    })
})