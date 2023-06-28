const modalOpnBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

modalOpnBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    modalDisplay();
  });

  closeModal.addEventListener('click', function () {
    modalDisplay();
  });
});

if (overlay.classList.contains('overlay')) {
  overlay.addEventListener('click', function () {
    modalDisplay();
  });
}

function modalDisplay() {
  overlay.classList.toggle('hidden');
  modal.classList.toggle('hidden');
}

body.addEventListener('keydown', function (e) {
  if (!overlay.classList.contains('hidden')) {
    if (e.key === 'Escape') {
      modalDisplay();
    }
  }
});
