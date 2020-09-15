let quantityControls = document.querySelectorAll('div.product__quantity-control');
let quantityControlsArr = Array.from(quantityControls);

quantityControlsArr.forEach((control) => {
  let parentControl = control.closest('div.product__quantity-controls');
  control.onclick = () => {
      let quantityElem = parentControl.querySelector('div.product__quantity-value');
      let quantity = +quantityElem.textContent;
      if (control.classList.contains('product__quantity-control_dec')) {
        if (quantity > 1) {
          quantity -= 1;
        }
      } else {
        quantity += 1;
      }
      quantityElem.textContent = quantity;
  }
});

let addButtons = document.querySelectorAll('div.product__add');
let addButtonsArr = Array.from(addButtons);

function createProduct(id, imgSrc, count) {
  let div = document.createElement('div');
  div.className = 'cart__product';
  div.dataset.id = id;
  div.innerHTML = '<img class="cart__product-image" src=""><div class="cart__product-count"></div>';
  div.querySelector('.cart__product-image').src = imgSrc;
  div.querySelector('.cart__product-count').textContent = count;
  return div;
}

addButtons.forEach((button) => {
  button.onclick = () => {

    let product = button.closest('div.product');
    let productDataId = product.dataset.id;
    let productImg = product.querySelector('img.product__image').src;
    let productCount = product.querySelector('div.product__quantity-value').textContent;

    let cartProducts = document.querySelectorAll('div.cart__product');

    if (cartProducts.length != 0) {
      for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].dataset.id === productDataId) {
          quantity = +cartProducts[i].querySelector('div.cart__product-count').textContent;
          quantity += +productCount;
          cartProducts[i].querySelector('div.cart__product-count').textContent = quantity;
        }
        else {
          document.querySelector('div.cart__products').insertAdjacentElement('beforeEnd', createProduct(productDataId, productImg, productCount));
        }
      }
    } else {
      document.querySelector('div.cart__products').insertAdjacentElement('beforeEnd', createProduct(productDataId, productImg, productCount));
    }
  }
});
