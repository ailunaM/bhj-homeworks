const progress = document.getElementById('progress');

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let request = new XMLHttpRequest();
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  request.upload.onprogress = function (event) {
    let percentComplete = event.loaded / event.total;
    progress.value = percentComplete;
  };

  request.send(formData);
});
