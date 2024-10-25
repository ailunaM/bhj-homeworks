const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const modalBg = document.getElementById('modal-bg');
const modalBox = document.getElementById('modal-box');
const message = document.getElementById('message');
modalBg.onclick = () => {
  modalBg.style.display = 'none';
  modalBox.style.display = 'none';
};

function gameEnd(gameStatus) {
  modalBg.style.display = 'flex';
  modalBox.style.display = 'block';
  message.textContent = gameStatus;
  dead.textContent = 0;
  lost.textContent = 0;
}

for (let i = 1; i < 10; i++) {
  const hole = document.getElementById(`hole${i}`);
  hole.onclick = () => {
    let holeHasMole = hole.className.includes('hole_has-mole');
    if (dead.textContent == 1) {
      gameEnd("Победа!");
    } else if (holeHasMole) {
      dead.textContent++;
    }
    if (lost.textContent == 4) {
      gameEnd('Вы проиграли!');
    } else if (holeHasMole === false) {
      lost.textContent++;
    }
  };
}
