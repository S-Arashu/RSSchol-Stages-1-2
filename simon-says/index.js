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

start.addEventListener('click', (event) => {

  document.body.innerHTML = '';
  startGame(currentArr);
})

// random sequence
let roundCount = 2;


function startLevel(count, arr){
  
  let keyboardKeys = document.querySelectorAll('.digital'); 
  for(let i=0; i<count; i++){
    let randomSymbol = Math.floor(Math.random() * arr.length);
    keyboardKeys.forEach((keys) => {
      console.log(keys.innerHTML === arr[randomSymbol])
      if(keys.innerHTML == arr[randomSymbol]){
        setTimeout(() => {
          keys.classList.add('chooseKey');
        }, 500);
        setTimeout(() => {
          keys.classList.remove('chooseKey');
        }, 3000);
      }
    })
  }
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

  startLevel(roundCount, currentArr);
}

