export function dialogWrongValue(parent: { append: (arg0: HTMLDialogElement) => void }) {
  const dialog = document.createElement('dialog');
  dialog.classList.add('popup');
  dialog.textContent = 'Please, enter correct data';
  parent.append(dialog);
  dialog.showModal();
}
