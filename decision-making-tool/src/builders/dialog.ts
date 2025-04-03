export function dialogWrongValue(parent: { append: (arg0: HTMLDialogElement) => void }) {
  const dialog = document.createElement('dialog');
  dialog.classList.add('popup-wrong');
  dialog.textContent = 'Please, enter correct data';
  parent.append(dialog);
  const dialogWrapper = document.createElement('div');
  dialogWrapper.classList.add('dialog-wrapper');
  dialog.append(dialogWrapper);
  const dialogButton = document.createElement('button');
  dialogButton.classList.add('dialog-button');
  dialogButton.innerText = 'OK';
  dialogWrapper.append(dialogButton);
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

  dialog.addEventListener('click', closeOnBackDropClick);

  function closeOnBackDropClick({ currentTarget, target }: MouseEvent): void {
    const dialogElement = currentTarget;

    if (dialogElement instanceof HTMLDialogElement) {
      const isClickedOnBackDrop = target === dialogElement;
      if (isClickedOnBackDrop && dialogElement) {
        dialogElement.close();
        dialog.remove();
      }
    }
  }
}
