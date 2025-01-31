'use strict'

const body = document.querySelector('body');

const canvasElem = document.createElement('canvas');
canvasElem.setAttribute('width', '300');
canvasElem.setAttribute('height', '300');
canvasElem.setAttribute('id', 'nonogramsField');
body.append(canvasElem);

const canvas = document.getElementById('nonogramsField');
const ctx = canvas.getContext('2d');



const verticalCeil = 7;
const horizontalCeil = 6;

// const body = document.querySelector('body');
const ceilSizeWidth = canvas.width / horizontalCeil;
const ceilSizeHeight = canvas.height / verticalCeil;

// const ceilSizeWidth = 30;
// const ceilSizeHeight = 30 / 2;
const cluesFieldHorizontal = 2;
const cluesFieldVertical = 1;

// canvas.style.width = ceilSizeWidth * horizontalCeil + 'px';
// canvas.style.height = ceilSizeHeight * verticalCeil + 'px';

const cluesVertical = [
  [0, 0, 2, 0, 2, 0],
  [0, 2, 1, 5, 1, 2]
]

const cluesHorizontal = [
  [1, 5, 5, 1, 3]
]

let moveRightCoord = 0;
  let moveDownCoord = 0;
  let stepInMatrixVertical = 0;
  let stepVertical = 0;
  let stepInMatrix = 0;
  let step = 0;

createField(verticalCeil, horizontalCeil);

function createField (vertical, horizontal){
  stepInMatrixVertical = 0;
  stepInMatrix = 0;

  for(let i = 0; i < vertical; i+=1){
    moveRightCoord = 0;
    
    // if(stepInMatrixVertical >= cluesFieldHorizontal){
      
      // break;
    // }

    for(let j = 0; j < horizontal; j+=1){

      if(i < cluesFieldHorizontal){
        console.log(cluesVertical[stepInMatrixVertical][j] === 0);
        // for(let k = 0; k < horizontalCeil; k+=1){
          ctx.fillStyle = '#dce2f2';
          ctx.fillRect(moveRightCoord, moveDownCoord, ceilSizeWidth, ceilSizeHeight);
          ctx.fillStyle = '#464646';
          if(cluesVertical[stepInMatrixVertical][j] === 0){
            ctx.fillStyle = 'transparent';
          }
          ctx.fillText(cluesVertical[stepInMatrixVertical][j], moveRightCoord + ceilSizeWidth / 2.5, moveDownCoord + ceilSizeHeight / 1.5);

          // if(i == cluesFieldHorizontal - 1){
          //   ctx.fillStyle = 'orange';
          // }
          // stepVertical += 1;
          // continue newRowClue;
        // }
        // i+=cluesFieldHorizontal;
      }

      if(i >= cluesFieldHorizontal && moveRightCoord === 0){
        // for(let k = 0; k < verticalCeil - cluesFieldHorizontal; k+=1){
          ctx.fillStyle = '#dce2f2';
          ctx.fillRect(moveRightCoord, moveDownCoord, ceilSizeWidth, ceilSizeHeight);
          ctx.strokeRect(moveRightCoord, moveDownCoord, ceilSizeWidth, ceilSizeHeight);
          ctx.fillStyle = '#464646';
          // ctx.font = '15px serif';
          ctx.fillText(cluesHorizontal[stepInMatrix][step], moveRightCoord + ceilSizeWidth / 2.5, moveDownCoord + ceilSizeHeight / 1.5);
        // }
        moveRightCoord += ceilSizeWidth;
        step += 1;
      } else {
        ctx.strokeRect(moveRightCoord, moveDownCoord, ceilSizeWidth, ceilSizeHeight);
        moveRightCoord += ceilSizeWidth;
      };
    };

    stepInMatrixVertical += 1;
    

    moveDownCoord += ceilSizeHeight;
  }
  stepInMatrix += 1;

  drawLines();
}

function drawLines () {
  ctx.strokeStyle = 'orange';
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(0, ceilSizeHeight * cluesFieldHorizontal);
  ctx.lineTo(ceilSizeWidth * horizontalCeil, ceilSizeHeight * cluesFieldHorizontal);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(ceilSizeWidth * cluesFieldVertical, 0);
  ctx.lineTo(ceilSizeWidth * cluesFieldVertical, ceilSizeHeight * verticalCeil);
  ctx.stroke();
}

// canvas.addEventListener('click', (event) => {
//   const rect = canvas.getBoundingClientRect();
//   const x = event.clientX - Math.floor(rect.left);
//   const y = event.clientY - Math.floor(rect.top);
//   const col = (x / Math.floor(ceilSizeWidth));
//   const row = (y / Math.floor(ceilSizeWidth));
//   console.log(col, row);
// })
let elemLeft = canvas.offsetLeft + canvas.clientLeft;
    let elemTop = canvas.offsetTop + canvas.clientTop + canvas.scrollTop;


    // context = canvas.getContext('2d'),
    let elements = new Set();
let a = 0;


window.addEventListener('resize', () => {
  // canvas.addEventListener('click', () => {
elemLeft = canvas.offsetLeft + canvas.clientLeft;
        elemTop = canvas.offsetTop + canvas.clientTop + canvas.scrollTop;
  // })
      
  })
// Add event listener for `click` events.
canvas.addEventListener('click', function(event) {
    let x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

        

    // Collision detection between clicked offset and element.
    // elements.forEach(function(element) {
        if (event.target.tagName === 'CANVAS' && event.pageX > canvas.offsetLeft + ceilSizeWidth * cluesFieldVertical - 2 && event.pageX < canvas.offsetLeft + canvas.offsetWidth && event.pageY > canvas.offsetTop + canvas.scrollTop + Math.round(ceilSizeHeight) * (cluesFieldHorizontal) && event.pageY < canvas.offsetTop + canvas.offsetHeight) {

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
squares()
  // item.count++;
} else {
  
  ctx.fillStyle = '#d3d3d3';
  squares()
      elements.delete(item);
console.log(elements);
}
      // })
      
    // }
    

          console.log(x, y);
          console.log(col, row);
            
function squares(){
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

    

console.log(moveRightCoord);
let readyPicture = new Set();
elements.forEach((elem) => {
  readyPicture.add({col: elem.col,
    row: elem.row,
  });
  console.log(readyPicture);
})
const picture = new Set([
  {col: 3, row: 2},
  {col: 3, row: 3},
  {col: 3, row: 4},
  {col: 3, row: 5},
  {col: 3, row: 6},
  {col: 1, row: 3},
  {col: 2, row: 3},
  {col: 4, row: 3},
  {col: 5, row: 3},
  {col: 5, row: 4},
  {col: 4, row: 4},
  {col: 2, row: 4},
  {col: 1, row: 4},
  {col: 2, row: 6},
  {col: 4, row: 6}
]);

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

let result = isSubset(readyPicture, picture);
console.log(result);
console.log(picture);
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

