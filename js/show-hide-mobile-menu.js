const buttonMenu = document.querySelector('.mobile-menu-button');
const modalMenulWindow = document.querySelector('.mobile-menu');
const buttonMenuClose = document.querySelector('.mobile-menu-close-button');

buttonMenu.addEventListener('click', addClassOpen);

buttonMenuClose.addEventListener('click', removeClassOpen);

function addClassOpen() {
  modalMenulWindow.classList.add('is-mobile-menu-open');
}

function removeClassOpen() {
  modalMenulWindow.classList.remove('is-mobile-menu-open');
}
