const rotators = document.getElementsByClassName('rotator');
const arrayRotators = Array.from(rotators);

arrayRotators.forEach((rotator, i) => {
  const rotatorCase = Array.from(rotator.getElementsByClassName('rotator__case'));
  let index = 0;
  // rotator.textContent = rotatorCase[i].textContent
  setInterval(() => {
    index = (index + 1) %  rotatorCase.length
    // i++
    // if(i >= rotatorCase.length){
    //     i = 0;
    // }
    rotator.textContent = rotatorCase[index].textContent
  }, 1000);
});

