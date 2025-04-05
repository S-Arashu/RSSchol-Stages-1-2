import { getFromLocalStorage, isMusic, objData, SOUNDOFF, SOUNDON, title } from '..';
import { audio, audioWrong, createAudio, createAudioWrong } from './createAudio';
import { dialogWrongValue } from './dialog';
import { loadOptions } from './loadOptions';
import { container, containerForOptions, create } from './mainBlock';

// const path = require('path');

// // Define a directory and a file name
// const directory = 'sounds';
// const fileName = 'sounds_win.mp3';
// const SOUNDON = 'Sound ON';
// const SOUNDOFF = 'Sound OFF';
export const soundButton = document.createElement('button');
// // Create a full path to the file
// const filePath = path.join(__dirname, directory, fileName);
// export let isSound = isMusic;

export function createChoosePage() {
  containerForOptions.textContent = '';
  container.textContent = '';
  let isSound = Boolean(Number(localStorage.sound));
  // if (!localStorage.sound) {
  //   isSound = true;
  //   localStorage.sound = '1';
  //   soundButton.textContent = SOUNDON;
  //   console.log('No sound');
  // }

  // if (localStorage.sound === '1') {
  //   isSound = true;
  //   soundButton.textContent = SOUNDON;
  //   console.log('Sound on');
  // }

  // if (localStorage.sound === '0') {
  //   isSound = false;
  //   soundButton.textContent = SOUNDOFF;
  //   console.log('Sound off');
  // }

  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'wheel');
  canvas.setAttribute('width', '400');
  canvas.setAttribute('height', '400');
  containerForOptions.append(canvas);

  const pointer = document.createElement('div');
  pointer.setAttribute('id', 'pointer');
  containerForOptions.append(pointer);

  const startButton = document.createElement('button');
  startButton.setAttribute('id', 'start');
  startButton.textContent = 'Start';
  containerForOptions.append(startButton);

  const output = document.createElement('div');
  output.setAttribute('id', 'selected-option');
  containerForOptions.append(output);

  const homeButton = document.createElement('button');
  homeButton.setAttribute('id', 'homeButton');
  homeButton.textContent = 'Home';
  containerForOptions.append(homeButton);

  // const soundButton = document.createElement('button');
  soundButton.setAttribute('id', 'soundButton');
  // soundButton.textContent = SOUNDON;
  containerForOptions.append(soundButton);

  // soundBtn = soundButton;

  const containerForDuration = document.createElement('div');
  containerForDuration.classList.add('container');
  // container.setAttribute('tabindex', '1');
  containerForDuration.classList.add('containerForDuration');
  containerForOptions.append(containerForDuration);

  const timeIcon = document.createElement('p');
  timeIcon.classList.add('clock-icon');
  timeIcon.textContent = '⏰';
  containerForDuration.append(timeIcon);

  const timeField = document.createElement('input');
  timeField.classList.add('duration-input');
  timeField.setAttribute('type', 'number');
  timeField.setAttribute('placeholder', 'Duration in seconds');
  timeField.setAttribute('value', '5');
  timeField.setAttribute('min', '5');
  timeField.setAttribute('max', '30');
  timeField.setAttribute('title', 'Please enter a duration between 5 and 30 seconds');
  containerForDuration.append(timeField);

  // let durationValue: number;

  // timeField.oninput = function () {
  //   durationValue = +timeField.value;
  // };

  soundButton.addEventListener('click', () => {
    // isSound = Boolean(Number(localStorage.sound));
    isSound = !isSound;
    if (!isSound) {
      // audio.setAttribute('autoplay', 'false');
      // audio.muted;
      localStorage.sound = '0';
      soundButton.textContent = SOUNDOFF;
    }

    if (isSound) {
      // audio.setAttribute('autoplay', 'true');
      localStorage.sound = '1';
      soundButton.textContent = SOUNDON;
      // audio.play();
    }
  });

  homeButton.addEventListener('click', () => {
    containerForOptions.textContent = '';
    container.textContent = '';
    localStorage.page = '0';
    location.hash = 'main';

    document.body.append(title);

    create(title);

    // export const containerForOptions = document.createElement('div');
    containerForOptions.classList.add('containerForOptions');
    title.append(containerForOptions);
    loadOptions(objData);
  });

  let top = String(canvas.offsetTop + pointer.offsetHeight / 2);
  let left = String(canvas.offsetLeft + canvas.offsetWidth / 2);
  pointer.style.top = top + 'px';
  pointer.style.left = left + 'px';

  window.addEventListener('resize', () => {
    top = String(canvas.offsetTop + pointer.offsetHeight / 2);
    left = String(canvas.offsetLeft + canvas.offsetWidth / 2);
    pointer.style.top = top + 'px';
    pointer.style.left = left + 'px';
  });

  let options = getFromLocalStorage('dataFromInputs');

  const ctx = canvas.getContext('2d');
  const sections = Object.keys(options).filter(key => key.startsWith('#'));
  const sectionValues = sections.map(key => parseInt(options[key], 10));
  const sectionNames = sections.map(key => options[`option-${key}`]);
  const total = sectionValues.reduce((sum, val) => sum + val, 0);
  const angles = sectionValues.map(value => (value / total) * 2 * Math.PI);

  let startAngle = 0;

  function drawWheel() {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.9;

      sections.forEach((section, index) => {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + angles[index]);
        ctx.fillStyle = 'orange'; // Keep the same color for all variants
        ctx.fill();
        ctx.stroke();

        // Add text labels to the sections
        const midAngle = startAngle + angles[index] / 2;
        const textX = centerX + Math.cos(midAngle) * (radius / 2);
        const textY = centerY + Math.sin(midAngle) * (radius / 2);
        ctx.fillStyle = 'black';
        ctx.fillText(sectionNames[index], textX, textY);

        startAngle += angles[index];
      });
    }
  }

  function spinWheel(duration: number) {
    let start: number | null = null;
    const totalDegree = Math.random() * 360 + 720; // Spin at least 720 degrees
    const spinDuration = duration * 1000; // Convert to milliseconds

    function animate(timestamp: number | null) {
      if (!start) start = timestamp;
      if (timestamp && start) {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / spinDuration, 1);
        const easeOutQuad = progress * (2 - progress); // Easing function

        const angle = totalDegree * (totalDegree - 720) * easeOutQuad;
        startAngle = angle * (Math.PI / 180);

        drawWheel();

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
        // else {
        //   const normalizedAngle = ((startAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI); // Ensure angle is positive
        //   const pointerAngle = (normalizedAngle + Math.PI / 2) % (2 * Math.PI); // Adjust the angle for pointer position
        //   let cumulativeAngle = 0;
        //   let idx;
        //   for (idx = 0; idx < angles.length; idx++) {
        //     cumulativeAngle += angles[idx];
        //     if (pointerAngle < cumulativeAngle) {
        //       break; // Found the section index
        //     }
        //   }
        //   output.innerText = sectionNames[idx];
        // }
      }
    }
    requestAnimationFrame(animate);
  }

  startButton.addEventListener('click', () => {
    if (+timeField.value >= 5 && +timeField.value <= 30) {
      spinWheel(+timeField.value);
      homeButton.disabled = true;
      soundButton.disabled = true;
      timeField.disabled = true;
      window.setTimeout(() => {
        homeButton.disabled = false;
        soundButton.disabled = false;
        timeField.disabled = false;
        createAudio('win');
        if (!isSound) {
          // audio.setAttribute('autoplay', 'false');
          audio.muted;
          // soundButton.textContent = SOUNDOFF;
        } else {
          // audio.setAttribute('autoplay', 'true');
          // soundButton.textContent = SOUNDON;
          audio.play();
        }
      }, +timeField.value * 1000);
    } else {
      createAudioWrong('squeak');
      if (!isSound) {
        // audio.setAttribute('autoplay', 'false');
        audioWrong.muted;
        // soundButton.textContent = SOUNDOFF;
      } else {
        // audio.setAttribute('autoplay', 'true');
        // soundButton.textContent = SOUNDON;
        audioWrong.play();
      }
      dialogWrongValue(containerForOptions);
    }
  });

  // Initial drawing of the wheel
  drawWheel();

  // const sectionCount = Object.keys(options).filter(key => key.startsWith('option-')).length;
  // const ctx = canvas.getContext('2d');

  // const drawWheel = () => {
  //   const angle = (2 * Math.PI) / sectionCount;
  //   let startAngle = 0;

  //   if (ctx) {
  //     for (let i = 0; i < sectionCount; i++) {
  //       ctx.beginPath();
  //       ctx.moveTo(200, 200); // Center
  //       ctx.arc(200, 200, 150, startAngle, startAngle + angle);
  //       ctx.fillStyle = 'lightblue'; // Same color
  //       ctx.fill();
  //       ctx.stroke();
  //       ctx.save();
  //       ctx.translate(
  //         200 + Math.cos(startAngle + angle / 2) * 100,
  //         200 + Math.sin(startAngle + angle / 2) * 100,
  //       );
  //       ctx.rotate(startAngle + angle / 2);
  //       ctx.fillStyle = 'black';
  //       ctx.fillText(options[`option-#${i + 1}`] || `Section ${i + 1}`, -25, 0);
  //       ctx.restore();
  //       startAngle += angle;
  //     }
  //   }
  // };

  // drawWheel();

  // startButton.addEventListener('click', () => {
  //   const totalDuration = 3000; // Duration of spin in milliseconds
  //   const spinCount = 5; // Spins
  //   let start: number | null = null;
  //   let degrees = 0;

  //   function spinWheel(timestamp: number | null) {
  //     if (!start) start = timestamp;
  //     if (timestamp && start && ctx) {
  //       const elapsed = timestamp - start;
  //       if (elapsed < totalDuration) {
  //         // Simple easing effect
  //         degrees += spinCount * 360 + (elapsed / totalDuration) * 360;
  //         ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  //         ctx.save(); // Save the current context
  //         ctx.translate(200, 200); // Move to center
  //         ctx.rotate((degrees * Math.PI) / 180); // Rotate
  //         ctx.translate(-200, -200); // Move back
  //         drawWheel(); // Draw the wheel
  //         ctx.restore(); // Restore the context
  //         requestAnimationFrame(spinWheel);
  //       } else {
  //         // Calculate the selected section
  //         const selectedIndex = Math.floor(((degrees % 360) / 360) * sectionCount);
  //         output.innerText = `Selected: ${options[`option-#${selectedIndex + 1}`]}`;
  //       }
  //     }
  //   }

  //   requestAnimationFrame(spinWheel);
  // });
}

// window.addEventListener('load', event => {
//   console.log(localStorage.sound);
//   if (!localStorage.sound) {
//     isSound = true;
//     localStorage.sound = '1';
//     soundButton.textContent = SOUNDON;
//     console.log('No sound');
//   }

//   if (localStorage.sound === '1') {
//     isSound = true;
//     soundButton.textContent = SOUNDON;
//     console.log('Sound on');
//   }

//   if (localStorage.sound === '0') {
//     isSound = false;
//     soundButton.textContent = SOUNDOFF;
//     console.log('Sound off');
//   }
// });
