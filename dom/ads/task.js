const rotators = document.getElementsByClassName('rotator');
const arrayRotators = Array.from(rotators);

arrayRotators.forEach((rotator) => {
  const rotatorCase = Array.from(rotator.getElementsByClassName('rotator__case'));
  let i = 0;
  rotator.textContent = rotatorCase[i].textContent
  setInterval(() => {
    i++
    if(i >= rotatorCase.length){
        i = 0;
    }
    rotator.textContent = rotatorCase[i].textContent
  }, 1000);
});

