const products = Array.from(document.getElementsByClassName('product'));
const cartProducts = document.querySelector('.cart__products');

products.forEach((product) => {
  console.log(product);
  let currentQuantityValue = 1;
  const productQuantityValue = product.querySelector('.product__quantity-value');
  productQuantityValue.textContent = currentQuantityValue;
  const controlDec = product.querySelector('.product__quantity-control_dec');
  const controlInc = product.querySelector('.product__quantity-control_inc');
  const attribute = product.getAttribute('data-id');
  const productImage = product.querySelector('.product__image').src;
  const btn = product.querySelector('.product__add');
  btn.addEventListener('click', () => {
    const productHtml = `
    <div class="cart__product" data-id="${attribute}">
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${currentQuantityValue}</div>
            </div>
    `;
    if (currentQuantityValue > 0) cartProducts.insertAdjacentHTML('beforeend', productHtml);
  });

  function up() {
    currentQuantityValue++;
    productQuantityValue.textContent = currentQuantityValue;
  }

  function down() {
    if (currentQuantityValue > 0) {
      currentQuantityValue--;
      productQuantityValue.textContent = currentQuantityValue;
    }
  }

  controlInc.addEventListener('click', up);
  controlDec.addEventListener('click', down);
});
