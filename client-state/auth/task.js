const form = document.getElementById('signin__form');
const signIn = document.getElementById('signin');
const userIdSpan = document.getElementById('user_id');
const welcome = document.getElementById('welcome');

const closeModalBtn = document.getElementById('closeBtn');
closeModalBtn.addEventListener('click', () => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.remove('overlay__active');
});

function showModal() {
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('overlay__active');
}

function showWelcome(userId) {
  userIdSpan.textContent = userId;
  signIn.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
}

const local = localStorage.getItem('user_id');
if (local) {
  showWelcome(local);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let request = new XMLHttpRequest();
  let formData = new FormData(form);
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  request.addEventListener('readystatechange', function () {
    if (this.readyState == request.DONE && request.status == 201) {
      let data = JSON.parse(this.responseText);
      if (data.success) {
        const userId = `${data.user_id}`;
        showWelcome(userId);
        localStorage.setItem('user_id', userId);
      } else {
        showModal();
      }
    } else if (request.status != 201) {
      showModal();
    }
  });
  request.send(formData);
});
