const items = document.getElementById('items');

const request = new XMLHttpRequest();
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
request.addEventListener('readystatechange', function () {
  if (this.readyState == request.DONE && this.status == 200) {
    let data = JSON.parse(this.responseText);
    var output = ``;
    let valuta = data.response.Valute;

    for (let key in valuta) {
      output += `<div class="item">
      <div class="item__code">
                    ${valuta[key].CharCode}
                </div>
                <div class="item__value">
                    ${valuta[key].Value}
                </div>
                <div class="item__currency">
                    ${valuta[key].Name}.
                </div>
                </div>
          `;
    }
    items.innerHTML = output;
    let loader = document.getElementById('loader');
    loader.classList.remove('loader_active');
  }
});
request.send();
