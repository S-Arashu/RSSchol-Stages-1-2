import '../../public/styles.css';

interface IButtons {
  tag: string;
  text: string;
  className: string;
}

export class Buttons implements IButtons {
  public tag!: string;
  public text!: string;
  public className!: string;

  constructor(tag: string, text: string, className: string) {
    this.tag = tag;
    this.text = text;
    this.className = className;
  }

  createButton() {
    const button = document.createElement(this.tag);
    button.textContent = this.text;
    button.classList.add(this.className);

    return button;
  }
}
