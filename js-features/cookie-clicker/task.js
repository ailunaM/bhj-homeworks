const button = document.getElementById('cookie');
let flag = false;
button.onclick = () => {
  let counter = document.getElementById('clicker__counter');
  counter.textContent++;
  if (flag == true) {
    document.getElementById('cookie').width = '200';
    flag = false;
  } else {
    document.getElementById('cookie').width = '230';
    flag = true;
  }
};
