const timer = document.getElementById('timer'); 
console.dir(timer);
let intervalId = setInterval(() => {
  timer.textContent -= 1;
  if (timer.textContent == 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}, 1000);
