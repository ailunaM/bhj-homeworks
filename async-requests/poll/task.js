const poll = Array.from(document.getElementsByClassName('poll'))[0];
const closeModalBtn = document.getElementById('closeBtn');
closeModalBtn.addEventListener('click', () => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.remove('overlay__active');
});

const request = new XMLHttpRequest();
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

request.addEventListener('readystatechange', function () {
  if (this.readyState == request.DONE && this.status == 200) {
    let data = JSON.parse(this.responseText);

    let title = data.data.title;
    let answers = data.data.answers;
    let output = `

    <div class="poll__title" id="poll__title">
         ${title}
    </div>
    <div class="poll__answers poll__answers_active" id="poll__answers">
    `;

    answers.forEach((answer) => {
      output += `<button class="poll__answer">
                ${answer}
                </button>`;
    });
    output += `
    </div>
    `;
    poll.innerHTML = output;

    const buttons = Array.from(document.getElementsByClassName('poll__answer'));
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const overlay = document.querySelector('.overlay');
        overlay.classList.add('overlay__active');
      });
    });
  }
});
request.send();
