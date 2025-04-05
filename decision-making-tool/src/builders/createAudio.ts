export const audio = document.createElement('audio');

export function createAudio(id: string) {
  audio.setAttribute('id', id);
  // audio.setAttribute('autoplay', 'true');
  document.body.append(audio);

  const source = document.createElement('source');
  source.setAttribute('src', '../sounds/sounds_win.mp3');
  source.setAttribute('type', 'audio/mp3');
  audio.append(source);

  // console.log(`Audio source path: ${src}`);
}

export const audioWrong = document.createElement('audio');

export function createAudioWrong(id: string) {
  audioWrong.setAttribute('id', id);
  // audio.setAttribute('autoplay', 'true');
  document.body.append(audioWrong);

  const source = document.createElement('source');
  source.setAttribute('src', '../sounds/mouse-squeak.mp3');
  source.setAttribute('type', 'audio/mp3');
  audioWrong.append(source);

  // console.log(`Audio source path: ${src}`);
}
