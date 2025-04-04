export const audio = document.createElement('audio');

export function createAudio(id: string, src?: string) {
  audio.setAttribute('id', id);
  // audio.setAttribute('autoplay', 'true');
  document.body.append(audio);

  const source = document.createElement('source');
  source.setAttribute('src', '../sounds/sounds_win.mp3');
  source.setAttribute('type', 'audio/mp3');
  audio.append(source);

  // console.log(`Audio source path: ${src}`);
}
