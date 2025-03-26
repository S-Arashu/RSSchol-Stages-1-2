import '../../public/styles.css';
interface IButtons {
    tag: string;
    text: string;
    className: string;
}
export declare class Buttons implements IButtons {
    tag: string;
    text: string;
    className: string;
    constructor(tag: string, text: string, className: string);
    createButton(): HTMLElement;
}
export {};
