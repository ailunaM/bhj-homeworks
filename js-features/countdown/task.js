const timer = document.getElementById('timer');

let intervalId = setInterval(() => {
  timer.textContent -= 1;
  if (timer.textContent == 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}, 1000);

const countdown = document.getElementById('countdown');

let intervalIdClear = setInterval(() => {
  const timeText = countdown.textContent; 
  const [h, m, s] = timeText.split(':');
  const ms = new Date().setHours(h, m, s); 

  const date = new Date(ms - 1000).toLocaleTimeString('ru-Ru', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }); 
  countdown.textContent = date;

  if (date.includes('00:00:00')) {
    clearInterval(intervalIdClear);
    alert('Вы победили в конкурсе!');
  }
}, 1000);