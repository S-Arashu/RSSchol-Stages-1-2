import cluesVertical from "./cluesVertical.mjs";
import cluesHorizontal from "./cluesHorizontal.mjs";
import games from "./games.mjs";
import namesGames from "./namesGames.mjs";
import templates from "./templates.mjs";

const body = document.querySelector('body');

const canvasElem = document.createElement('canvas');
canvasElem.setAttribute('width', '300');
canvasElem.setAttribute('height', '300');
canvasElem.setAttribute('id', 'nonogramsField');
body.append(canvasElem);

const gameChooseBlock = document.createElement('div');
gameChooseBlock.classList.add('gameChooseBlock');
body.append(gameChooseBlock);

const levelBlockEasy = document.createElement('p');
levelBlockEasy.classList.add('level');
levelBlockEasy.innerHTML = 'Easy';
gameChooseBlock.append(levelBlockEasy);

const canvas = document.getElementById('nonogramsField');
const ctx = canvas.getContext('2d');

let countLevel = 0;

levelBlockEasy.addEventListener('click', () => {
  if (countLevel === 0){
    levelBlockEasy.classList.add('active');
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.font = "20px Arial";
// ctx.textAlign = "center";
// ctx.fillText('Choose your game!', canvas.width / 2, canvas.height / 2);

  for (let i = 0; i < 5; i += 1){
    const nameGame = document.createElement('p');
  nameGame.classList.add('nameGame');
  nameGame.setAttribute('id', namesGames[i].id);
  nameGame.innerHTML = namesGames[i].name;
  gameChooseBlock.append(nameGame);
  }

  countLevel += 1;
  } else {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.font = "20px Arial";
// ctx.textAlign = "center";
// ctx.fillText('Choose your game!', canvas.width / 2, canvas.height / 2);
levelBlockEasy.classList.remove('active');
const levels = document.querySelectorAll('.nameGame');
levels.forEach((elem) => {
  elem.remove();
  countLevel = 0;
})
  }
  
})

let id = 0;
let verticalCeil = games[id].verticalCeil;
let horizontalCeil = games[id].horizontalCeil;
let elemLeft;
let elemTop;
let elements;
let elementsCross;
let ceilSizeWidth;
let ceilSizeHeight;

ctx.font = "20px Arial";
ctx.textAlign = "center";
ctx.fillText('Choose your game!', canvas.width / 2, canvas.height / 2);

window.addEventListener('resize', () => {
  // canvas.addEventListener('click', () => {
elemLeft = canvas.offsetLeft + canvas.clientLeft;
        elemTop = canvas.offsetTop + canvas.clientTop + canvas.scrollTop;
  // })
      
  })

gameChooseBlock.addEventListener('click', (event) => {
const target = event.target;

  if (target.className === 'nameGame'){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const levels = document.querySelectorAll('.nameGame');
levels.forEach((elem) => {
  elem.classList.remove('active');
})
  
  console.dir(target);

  id = target.id;
  target.classList.add('active');
  verticalCeil = games[id].verticalCeil;
  horizontalCeil = games[id].horizontalCeil;
  
  createField(verticalCeil, horizontalCeil);
  }
  
})


// let verticalCeil;
// let horizontalCeil;

// if(name === games[id].name){

// }

console.log(games[id].verticalCeil);

// const body = document.querySelector('body');
// const ceilSizeWidth = canvas.width / horizontalCeil;
// const ceilSizeHeight = canvas.height / verticalCeil;

// const ceilSizeWidth = 30;
// const ceilSizeHeight = 30 / 2;
// const cluesFieldHorizontal = 2;
// const cluesFieldVertical = 1;

// canvas.style.width = ceilSizeWidth * horizontalCeil + 'px';
// canvas.style.height = ceilSizeHeight * verticalCeil + 'px';

// const cluesVertical = [
//   [0, 0, 2, 0, 2, 0],
//   [0, 2, 1, 5, 1, 2]
// ]

// const cluesHorizontal = [
//   [1, 5, 5, 1, 3]
// ]





function createField (vertical, horizontal){
  ctx.font = "15px Arial";
  ceilSizeWidth = canvas.width / horizontalCeil;
ceilSizeHeight = canvas.height / verticalCeil;
elemLeft = canvas.offsetLeft + canvas.clientLeft;
elemTop = canvas.offsetTop + canvas.clientTop + canvas.scrollTop;


    // context = canvas.getContext('2d'),
    elements = new Set();
    elementsCross = new Set();
let a = 0;

let moveRightCoord = 0;
  let moveDownCoord = 0;
  let stepInMatrixVertical = 0;
  let stepVertical = 0;
  let stepInMatrix = 0;
  let step = 0;
  stepInMatrixVertical = 0;
  
  // step = 0;

  for(let i = 0; i < vertical; i += 1){
    moveRightCoord = 0;
    stepInMatrix = 0;
    
    // if(stepInMatrixVertical >= cluesFieldHorizontal){
      
      // break;
    // }
// console.log(stepInMatrix, step);
    for(let j = 0; j < horizontal; j+=1){
console.log(stepInMatrix, step);
      if(i < games[id].cluesFieldHorizontal){
        // console.log(cluesVertical[id][stepInMatrixVertical][j] === 0);
        // for(let k = 0; k < horizontalCeil; k+=1){
          ctx.fillStyle = '#dce2f2';
          ctx.fillRect(moveRightCoord, moveDownCoord, ceilSizeWidth, ceilSizeHeight);
          ctx.fillStyle = '#464646';
          if(cluesVertical[id][stepInMatrixVertical][j] === 0){
            ctx.fillStyle = 'transparent';
          }
          ctx.fillText(cluesVertical[id][stepInMatrixVertical][j], moveRightCoord + ceilSizeWidth / 2, moveDownCoord + ceilSizeHeight / 1.5);

          // if(i == cluesFieldHorizontal - 1){
          //   ctx.fillStyle = 'orange';
          // }
          // stepVertical += 1;
          // continue newRowClue;
        // }
        // i+=cluesFieldHorizontal;
      }

      if(i >= games[id].cluesFieldHorizontal && moveRightCoord < ceilSizeWidth * games[id].cluesFieldVertical){
        
        // for(let k = 0; k < verticalCeil - cluesFieldHorizontal; k+=1){
          ctx.fillStyle = '#dce2f2';
          ctx.fillRect(moveRightCoord, moveDownCoord, ceilSizeWidth, ceilSizeHeight);
          ctx.strokeRect(moveRightCoord, moveDownCoord, ceilSizeWidth, ceilSizeHeight);
          ctx.fillStyle = '#464646';
          // ctx.font = '15px serif';
          if(cluesHorizontal[id][stepInMatrix][step - games[id].cluesFieldHorizontal] === 0){
            ctx.fillStyle = 'transparent';
          }
          ctx.fillText(cluesHorizontal[id][stepInMatrix][step - games[id].cluesFieldHorizontal], moveRightCoord + ceilSizeWidth / 2, moveDownCoord + ceilSizeHeight / 1.5);
        // }
        moveRightCoord += ceilSizeWidth;
        stepInMatrix += 1;
        
      } else {
        ctx.strokeRect(moveRightCoord, moveDownCoord, ceilSizeWidth, ceilSizeHeight);
        moveRightCoord += ceilSizeWidth;
      };
      
    };

    stepInMatrixVertical += 1;
    step += 1;

    moveDownCoord += ceilSizeHeight;
  }
  
  drawLines();
}

function drawLines () {
  ctx.strokeStyle = 'orange';
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(0, ceilSizeHeight * games[id].cluesFieldHorizontal);
  ctx.lineTo(ceilSizeWidth * horizontalCeil, ceilSizeHeight * games[id].cluesFieldHorizontal);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(ceilSizeWidth * games[id].cluesFieldVertical, 0);
  ctx.lineTo(ceilSizeWidth * games[id].cluesFieldVertical, ceilSizeHeight * verticalCeil);
  ctx.stroke();

  ctx.strokeStyle = '#353535';
}

// canvas.addEventListener('click', (event) => {
//   const rect = canvas.getBoundingClientRect();
//   const x = event.clientX - Math.floor(rect.left);
//   const y = event.clientY - Math.floor(rect.top);
//   const col = (x / Math.floor(ceilSizeWidth));
//   const row = (y / Math.floor(ceilSizeWidth));
//   console.log(col, row);
// })
// let elemLeft = canvas.offsetLeft + canvas.clientLeft;
//     let elemTop = canvas.offsetTop + canvas.clientTop + canvas.scrollTop;


//     // context = canvas.getContext('2d'),
//     let elements = new Set();
// let a = 0;
document.oncontextmenu = function(event) {
    event.preventDefault();
    let x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
        if (event.target.tagName === 'CANVAS' && event.pageX > canvas.offsetLeft + ceilSizeWidth * games[id].cluesFieldVertical - 2 && event.pageX < canvas.offsetLeft + canvas.offsetWidth && event.pageY > canvas.offsetTop + canvas.scrollTop + Math.round(ceilSizeHeight) * (games[id].cluesFieldHorizontal) && event.pageY < canvas.offsetTop + canvas.offsetHeight){
          const col = Math.floor(x / (ceilSizeWidth));
    const row = Math.floor(y / (ceilSizeHeight));
  // ctx.fillStyle = 'black';
  // console.log(event.pageX, event.pageY);
  // console.log(row, games[id].cluesFieldHorizontal, col, games[id].cluesFieldVertical);
  //   ctx.fillText('x', ((col + games[id].cluesFieldVertical) * (ceilSizeWidth)) - (ceilSizeWidth * 0.5), ((row + (games[id].cluesFieldHorizontal)) * (ceilSizeHeight)) - (ceilSizeWidth * 0.5));
  let itemCross;
    let index;
    ctx.fillStyle = 'black';



//     elements.add({
//     // color: '#05EFFF',
//     width: ceilSizeWidth,
//     height: ceilSizeHeight,
//     top: ceilSizeHeight * row,
//     left: ceilSizeWidth * col,
//     col: col,
//     row: row,
//     count: 0
// });
    // if(elements.length != 0){
      // elements.forEach((element) => {
        elementsCross.forEach((elem) => {
          if(elem.col === col && elem.row === row){
            itemCross = elem;
          }});
        // index = elements.indexOf(item);
        // console.log(item);
        if(!elementsCross.has(itemCross)){
  ctx.fillStyle = 'black';
  elementsCross.add({
    // color: '#05EFFF',
    width: ceilSizeWidth,
    height: ceilSizeHeight,
    top: ceilSizeHeight * row,
    left: ceilSizeWidth * col,
    col: col,
    row: row,
    count: 0
});
squares(elementsCross)
  // item.count++;
} else {
  
  ctx.fillStyle = '#d3d3d3';
  squares(elementsCross)
      elementsCross.delete(itemCross);
// console.log(elements);
}

function squares(elements){
  elements.forEach(function(element) {
  // console.log(elements);

//   let color = ctx.getImageData(event.pageX, event.pageY, ceilSizeWidth, ceilSizeHeight);
// console.log(color);

// for (let i = 0; i < color.data.length; i += 4) {
//   color.data[i] = 255-color.data[i];
//   color.data[i+1] = 255-color.data[i+1];
//   color.data[i+2] = 255-color.data[i+2];
//   color.data[i+3] = 255;
// }
// ctx.putImageData(color, element.left, element.top);
  // console.log(item);
  // if(item) {
  //   ctx.fillStyle = 'lightgrey';
  //   item.count++
  // } else {
  //   ctx.fillStyle = 'black';
  // }
// if(item.count == 2){
  // ctx.fillStyle = 'lightgrey';
  //     elements.splice(index, 1);
// }

    if(element.col === col && element.row === row){
      ctx.fillText('x', element.left + element.width / 2, element.top + element.height / 2);
    // ctx.strokeStyle = '#353535';
    // ctx.strokeRect(element.left, element.top, element.width, element.height);
    // drawLines ();
    }
    
// if(item.count == 2){
//   elements.splice(index, 1);
// }
});
}
        }

        
    
  };


// Add event listener for `click` events.
canvas.addEventListener('click', function(event) {
    let x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

        

    // Collision detection between clicked offset and element.
    // elements.forEach(function(element) {
        if (event.target.tagName === 'CANVAS' && event.pageX > canvas.offsetLeft + ceilSizeWidth * games[id].cluesFieldVertical - 2 && event.pageX < canvas.offsetLeft + canvas.offsetWidth && event.pageY > canvas.offsetTop + canvas.scrollTop + Math.round(ceilSizeHeight) * (games[id].cluesFieldHorizontal) && event.pageY < canvas.offsetTop + canvas.offsetHeight) {

          // && event.pageX > canvas.offsetLeft + ceilSizeWidth * cluesFieldVertical - 2 && event.pageX < canvas.offsetLeft + canvas.offsetWidth && event.pageY > canvas.offsetTop + canvas.scrollTop + Math.round(ceilSizeHeight) * (cluesFieldHorizontal) && event.pageY < canvas.offsetTop + canvas.offsetHeight
          
          const col = Math.floor(x / (ceilSizeWidth));
    const row = Math.floor(y / (ceilSizeHeight));
    let item;
    let index;
    ctx.fillStyle = 'black';



//     elements.add({
//     // color: '#05EFFF',
//     width: ceilSizeWidth,
//     height: ceilSizeHeight,
//     top: ceilSizeHeight * row,
//     left: ceilSizeWidth * col,
//     col: col,
//     row: row,
//     count: 0
// });
    // if(elements.length != 0){
      // elements.forEach((element) => {
        elements.forEach((elem) => {
          if(elem.col === col && elem.row === row){
            item = elem;
          }});
        // index = elements.indexOf(item);
        console.log(item);
        if(!elements.has(item)){
  ctx.fillStyle = 'black';
  elements.add({
    // color: '#05EFFF',
    width: ceilSizeWidth,
    height: ceilSizeHeight,
    top: ceilSizeHeight * row,
    left: ceilSizeWidth * col,
    col: col,
    row: row,
    count: 0
});
squares(elements)
  // item.count++;
} else {
  
  ctx.fillStyle = '#d3d3d3';
  squares(elements)
      elements.delete(item);
console.log(elements);
}
      // })
      
    // }
    

          console.log(x, y);
          console.log(col, row);
            
function squares(elements){
  elements.forEach(function(element) {
  console.log(elements);

//   let color = ctx.getImageData(event.pageX, event.pageY, ceilSizeWidth, ceilSizeHeight);
// console.log(color);

// for (let i = 0; i < color.data.length; i += 4) {
//   color.data[i] = 255-color.data[i];
//   color.data[i+1] = 255-color.data[i+1];
//   color.data[i+2] = 255-color.data[i+2];
//   color.data[i+3] = 255;
// }
// ctx.putImageData(color, element.left, element.top);
  // console.log(item);
  // if(item) {
  //   ctx.fillStyle = 'lightgrey';
  //   item.count++
  // } else {
  //   ctx.fillStyle = 'black';
  // }
// if(item.count == 2){
  // ctx.fillStyle = 'lightgrey';
  //     elements.splice(index, 1);
// }

    if(element.col === col && element.row === row){
      ctx.fillRect(element.left, element.top, element.width, element.height);
    ctx.strokeStyle = '#353535';
    ctx.strokeRect(element.left, element.top, element.width, element.height);
    drawLines ();
    }
    
// if(item.count == 2){
//   elements.splice(index, 1);
// }
});
}



        }

        
    // });

    

// console.log(moveRightCoord);
let readyPicture = new Set();
elements.forEach((elem) => {
  readyPicture.add({col: elem.col,
    row: elem.row,
  });
  console.log(readyPicture);
})
// const picture = new Set([
//   {col: 3, row: 2},
//   {col: 3, row: 3},
//   {col: 3, row: 4},
//   {col: 3, row: 5},
//   {col: 3, row: 6},
//   {col: 1, row: 3},
//   {col: 2, row: 3},
//   {col: 4, row: 3},
//   {col: 5, row: 3},
//   {col: 5, row: 4},
//   {col: 4, row: 4},
//   {col: 2, row: 4},
//   {col: 1, row: 4},
//   {col: 2, row: 6},
//   {col: 4, row: 6}
// ]);

// const isSubset = (a, b) => a.size === b.size && a.isSubsetOf(b);
function isSubset (a, b) {
  
  // a.forEach((v) => {
  //   console.log(!b.has(v));
  //   if (!b.has(v)) {
  //           return false;
  //       } else {
  //         return true;
  //       }
  // })
    // for (const v of a) {
    //   console.log(b.has(v));
    //   console.log(b);
    //   console.log(v);
    //   b.forEach((el) => {
    //     console.log(el);
    //     if (!el.has(v)) {
    //         return false;
    //     }
    //   })
        
    // }
console.log(templates);
    let arr1 = [...a];
    let arr2 = [...b];
    let count = 0;

    console.log(arr1, arr2);

    if(arr1.length === arr2.length){
      next: for(let i = 0; i < arr1.length; i += 1){
        for(let j = 0; j < arr1.length; j += 1){
          if(arr1[i].col === arr2[j].col && arr1[i].row === arr2[j].row){
            count += 1;
          }
        }
      }
    }

    if(count === arr1.length && arr1.length != 0){
      return true;
    }
};

let result = isSubset(readyPicture, templates[id]);
console.log(result);
console.log(templates[id]);
console.log(readyPicture);
if(result){
  let modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = 'Great! You have solved the nonogram!';
  body.appendChild(modal);
  setTimeout(() => {
    modal.remove();
  }, 3000)
  console.log('Super!!!');
}
});

