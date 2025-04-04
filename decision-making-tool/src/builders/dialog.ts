export function dialogWrongValue(parent: { append: (arg0: HTMLDialogElement) => void }) {
  const dialogWrong = document.createElement('dialog');
  dialogWrong.classList.add('popup-wrong');
  dialogWrong.textContent = 'Please, enter correct data';
  parent.append(dialogWrong);
  const dialogWrapper = document.createElement('div');
  dialogWrapper.classList.add('dialog-wrapper');
  dialogWrong.append(dialogWrapper);
  const dialogButton = document.createElement('button');
  dialogButton.classList.add('dialog-button');
  dialogButton.innerText = 'OK';
  dialogWrapper.append(dialogButton);
  dialogWrong.showModal();
  // dialogWrong.focus();

  dialogWrong.addEventListener('cancel', event => {
    // if (event.key === 'Escape') {
    dialogWrong.remove();
    console.log(`remove dialogWrong`);
    // location.hash = 'main';
    // }
  });

  dialogButton.addEventListener('click', () => {
    // dialogWrong.close();
    if (dialogWrong.open) {
      dialogWrong.remove();
    }

    // location.hash = 'main';
  });

  const handleModalClick = (event: { clientX: number; clientY: number }) => {
    const modalRect = dialogWrong.getBoundingClientRect();

    if (
      event.clientX < modalRect.left ||
      event.clientX > modalRect.right ||
      event.clientY < modalRect.top ||
      event.clientY > modalRect.bottom
    ) {
      dialogWrong.remove();
    }
  };

  dialogWrong.addEventListener('click', handleModalClick);

  // dialogWrong.addEventListener('click', closeOnBackDropClick);

  // function closeOnBackDropClick({ currentTarget, target }: MouseEvent): void {
  //   const dialogElement = currentTarget;

  //   if (dialogElement instanceof HTMLDialogElement) {
  //     const isClickedOnBackDrop = target === dialogElement;
  //     if (isClickedOnBackDrop && dialogElement) {
  //       dialogElement.close();
  //       // dialogElement.remove();
  //       location.hash = 'main';
  //     }
  //   }
  // }
}
