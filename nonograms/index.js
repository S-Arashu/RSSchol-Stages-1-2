const canvas = document.getElementById('nonogramsField');
const ctx = canvas.getContext('2d');

const verticalCeil = 7;
const horizontalCeil = 6;

const body = document.querySelector('body');
const ceilSizeWidth = canvas.width / horizontalCeil;
const ceilSizeHeight = canvas.height / verticalCeil;
const cluesFieldHorizontal = 2;
const cluesFieldVertical = 1;

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
    let elemTop = canvas.offsetTop + canvas.clientTop;
    // context = canvas.getContext('2d'),
    let elements = [];
let a = 0;
// Add event listener for `click` events.
canvas.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

    // Collision detection between clicked offset and element.
    // elements.forEach(function(element) {
        if (event.target.tagName === 'CANVAS' && event.pageX > canvas.offsetLeft + ceilSizeWidth * cluesFieldVertical && event.pageX < canvas.offsetLeft + canvas.offsetWidth && event.pageY > canvas.offsetTop +  ceilSizeHeight * cluesFieldHorizontal && event.pageY < canvas.offsetTop + canvas.offsetHeight) {
          
          console.log(a++);
//             elements.push({
//     color: '#05EFFF',
//     width: ceilSizeWidth,
//     height: ceilSizeHeight,
//     top: y,
//     left: x
// });
        }
    // });

    

console.log(elements);

elements.forEach(function(element) {
    ctx.fillStyle = element.color;
    ctx.fillRect(element.left, element.top, element.width, element.height);
});

}, false);

// Add element.


// Render elements.

