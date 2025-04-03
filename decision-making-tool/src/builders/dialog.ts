export function dialogWrongValue(parent: { append: (arg0: HTMLDialogElement) => void }) {
  const dialog = document.createElement('dialog');
  dialog.classList.add('popup-wrong');
  dialog.textContent = 'Please, enter correct data';
  parent.append(dialog);
  const dialogButton = document.createElement('button');
  dialogButton.classList.add('dialog-button');
  dialogButton.innerText = 'OK';
  dialog.append(dialogButton);
  dialog.showModal();

  dialog.addEventListener('cancel', event => {
    // if (event.key === 'Escape') {
    dialog.remove();
    // }
  });

  dialogButton.addEventListener('click', () => {
    dialog.close();
    dialog.remove();
  });
}
