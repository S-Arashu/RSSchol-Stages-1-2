import { objData } from '..';

export function saveToFile() {
  const jsonString = JSON.stringify(objData, null, 2);

  function downloadJSON(jsonString: string, filename: string) {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadJSON(jsonString, 'myObject.json');
}
