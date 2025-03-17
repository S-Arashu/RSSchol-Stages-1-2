import '../../public/styles.css';

export default function createTitleApp() {
  const TITLE: string = 'Decision Making Tool';

  const title = document.createElement('h1');
  title.textContent = TITLE;
  title.classList.add('title');
  document.body.append(title);

  return title;
}
