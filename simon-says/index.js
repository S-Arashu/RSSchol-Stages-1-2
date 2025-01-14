function startPage () {
  document.body.innerHTML = '';
  document.body.innerHTML = `
  <div class="level">
    <p class="level-title">
      Choose your level!
    </p>
    <div class="container-for-level-choose">
      <div class="level-choose selected">
        <span class="level-choose-name">Easy</span>
      </div>
      <div class="level-choose">
        <span class="level-choose-name">Medium</span>
      </div>
      <div class="level-choose">
        <span class="level-choose-name">Hard</span>
      </div>
    </div>
  </div>
  <p id="selected-level">Selected level: Easy</p>
  <div class="start-game">
    <span>Start</span>
  </div>
  `
}

startPage();

let start = document.querySelector('.start-game');
let containerLevel = document.querySelector('.container-for-level-choose');
let level = 'Easy';
let body = document.querySelector('body');
let levelItems = document.querySelectorAll('.level-choose');
let selectedLevel = document.querySelector('#selected-level');



// chars for levels
let levelEasy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let levelMedium = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let levelHard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let currentArr = levelEasy;

// level of game
containerLevel.addEventListener('click', (event) => {
  console.dir(event.target);
  level = event.target.innerHTML;

  levelItems.forEach((item) => {
    item.classList.remove('selected');
  })

  event.target.parentElement.classList.add('selected');
  selectedLevel.innerHTML = `Selected level: ${level}`

  if(level === 'Easy'){
    currentArr = [...levelEasy];
  }

  if(level === 'Medium'){
    currentArr = [...levelMedium];
  }

  if(level === 'Hard'){
    currentArr = [...levelHard];
  }
})

start.addEventListener('click', () => {

  document.body.innerHTML = '';
  startGame(currentArr);
})

// random sequence
let roundCount = 2;
let currentSeq = [];
let isRepeat = false; 
let startVis = 500;
let endVis = 1000;
let countVis = 0;
let randomSymbol;
let currentString = '';
let currentLvl = 1;

function newLevel(){
  roundCount += 2;
  currentLvl++;
  currentSeq = [];
  currentString = '';
  let nextBtn = document.querySelector('#next');
  nextBtn.style.display = 'none';
  startLevel(roundCount, currentArr);
  let round = document.querySelector('#round');
  let repeat = document.querySelector('#repeat');
  repeat.style.display = 'block';
  repeat.classList.remove('disabled');
  round.innerHTML = currentLvl;
  let fieldInput = document.querySelector('.field');
      fieldInput.innerHTML = '';
      
}

function startLevel(count, arr){
  countVis = 0;
  // currentSeq = [];
  
  let keyboardKeys = document.querySelectorAll('.digital'); 

  keyboardKeys.forEach((keys) => {
      keys.classList.add('disabled');
    })
  for(let i=0; i<count; i++){
    
    if(!isRepeat){
      randomSymbol = Math.floor(Math.random() * arr.length);
      // if(currentSeq.includes(randomSymbol)){
      //   randomSymbol = Math.floor(Math.random() * arr.length);
      // }
      currentSeq.push(arr[randomSymbol]);
    }
    if(isRepeat){
      console.log(currentSeq[i])
      randomSymbol = i;
    }
    keyboardKeys.forEach((keys) => {
      if(keys.innerHTML == arr[randomSymbol]){
        setTimeout(() => {
          keys.classList.add('chooseKey');
        }, startVis + countVis);
        setTimeout(() => {
          keys.classList.remove('chooseKey');
        }, endVis + countVis);
      }

    })
    countVis += 1500;
  }

  setTimeout(() => {
    keyboardKeys.forEach((keys) => {
      keys.classList.remove('disabled');
    })
  }, countVis + 500);

  // keyboardKeys.forEach((keys) => {
  //     keys.classList.remove('disabled');
  //   })

  

    let repeat = document.querySelector('#repeat');
    console.log(currentSeq);
    repeat.addEventListener('click', () => {
      isRepeat = true;
      let fieldInput = document.querySelector('.field');
      fieldInput.innerHTML = '';
      currentString = '';
      startLevel(roundCount, currentSeq);
      repeat.classList.add('disabled');
      isRepeat = false;
    });

}




function startGame (arr) {
  // keyboard
  let keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  body.prepend(keyboard);
  let virtualKeyboard = document.querySelector('.keyboard');

  // navigation
  let nav = document.createElement('div');
  nav.innerHTML = `
  <div id="currentLevel">${level}</div>
  <div id="round">1</div>
  <div id="repeat">Repeat the sequence</div>
  <div id="next">Next</div>
  <div id="new-game">New game</div>
  `
  nav.classList.add('navigation');
  keyboard.before(nav);

  // field
  let field = document.createElement('div');
  field.classList.add('field');
  keyboard.before(field);

  // keyboard
  for(let i=0; i<arr.length; i++){
    
    let dig = document.createElement('div');
    dig.classList.add('digital');
    dig.innerHTML = arr[i];
    virtualKeyboard.append(dig);
  }

  let keyboardKeys = document.querySelectorAll('.digital'); 
  keyboardKeys.forEach((keys) => {
      keys.classList.add('disabled');
    })

  startLevel(roundCount, currentArr);

  // let current;
  let countOfMistakes = 0;

  // let virtualKeyboard = document.querySelector('.keyboard');
    virtualKeyboard.addEventListener('click', (event) => {
    let current = event.target.innerHTML;
    currentString += current.toUpperCase();

    console.log(currentSeq.join(''));
    console.log(currentString);
    console.log(currentSeq.join('') == currentString);
    let fieldInput = document.querySelector('.field');
    // fieldInput.innerHTML = '';
    // let target = event.target;
    console.dir(currentSeq.indexOf(+current))
    // currentSeq.forEach((char) => {
      if(typeof +current == 'number'){
        current = +current;
      }
      console.log(typeof current);
      // if(currentSeq.indexOf(current) != -1){
            
      //   fieldInput.innerHTML += current;
      // } else 
      if (event.target.className == 'keyboard') {
        return;
      } 
    //   else {
    //     fieldInput.innerHTML += current;
    //       body.style.backgroundColor = '#f013049c';
    //     setTimeout(() => {
    //       body.style.backgroundColor = '#db7093';
    //     }, 500);
    //     keyboardKeys.forEach((keys) => {
    //   keys.classList.add('disabled');
    // })
    //   }

if(currentSeq.join('') == currentString){
  fieldInput.innerHTML = currentString;
            body.style.backgroundColor = 'rgb(138 219 112 / 85%)';
            if(currentLvl == 5){
        let win = document.createElement('div');
        win.classList.add('win');
        win.innerHTML = 'You win!';
        body.append(win);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
        setTimeout(() => {
          body.style.backgroundColor = '#db7093';
        }, 500);
        let nextBtn = document.querySelector('#next');
  nextBtn.style.display = 'block';
  let repeat = document.querySelector('#repeat');
  repeat.style.display = 'none';
  nextBtn.addEventListener('click', newLevel);
        // fieldInput.innerHTML += current;
      } else if (currentSeq.join('').startsWith(currentString)){
        fieldInput.innerHTML = currentString;
      } else {
        countOfMistakes++;
        fieldInput.innerHTML = currentString;
          body.style.backgroundColor = '#f013049c';
        setTimeout(() => {
          body.style.backgroundColor = '#db7093';
        }, 500);
        keyboardKeys.forEach((keys) => {
      keys.classList.add('disabled');
    })
    if(countOfMistakes > 1){
      let lose = document.createElement('div');
      lose.classList.add('lose');
      lose.innerHTML = 'You lose!';
      body.append(lose);
      setTimeout(() => {
        window.location.reload();
      }, 3000);

    }
      }
    // })
  })

  // if(current){
  // let fieldInput = document.querySelector('.field');
    // fieldInput.innerHTML = '';
    // let target = event.target;
    // console.log(fieldInput)
    // currentSeq.forEach((char) => {
    //   if(char == current){
            
    //     fieldInput.innerHTML = current;
    //   } else {
    //     fieldInput.innerHTML += current;
    //       body.style.backgroundColor = '#f013049c';
    //     setTimeout(() => {
    //       body.style.backgroundColor = '#db7093';
    //     }, 500);
    //     keyboardKeys.forEach((keys) => {
    //   keys.classList.add('disabled');
    // })
    //   }
    // })
  // }

  let newGame = document.querySelector('#new-game');
  newGame.addEventListener('click', () => {
    window.location.reload();
  });

}