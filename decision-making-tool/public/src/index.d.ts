import '../public/styles.css';
export declare let isMusic: boolean;
export declare const SOUNDON = "Sound ON";
export declare const SOUNDOFF = "Sound OFF";
export declare const objData: {
    [key: string]: string | number | RegExpExecArray | null | string[] | undefined;
};
export declare const title: HTMLHeadingElement;
export declare function getFromLocalStorage(key: string): any;
