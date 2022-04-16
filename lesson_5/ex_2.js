// Сделать генерацию корзины динамической: верстка корзины не должна находиться
// в HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
// сгенерированная на базе JS:
// a) Пустая корзина должна выводить строку «Корзина пуста»;
// b) Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

const mainEl = document.querySelector('main');

const products = [];
const cart = [];

let lastId = 1;

function Product(title, price, img) {
  this.id = lastId++;
  this.title = title;
  this.price = price;
  this.img = img;
  this.quantity = 1;
}

function loadProducts() {
  const entity = ['Shirt', 'Shoes', 'Hat', 'Pants', 'Skirt', 'Jacket'];
  const colors = ['Red', 'White', 'Black', 'Green', 'Yellow'];
  for(let i = 0; i < 9; i++) {
    const title = entity[_.random(0, entity.length - 1)] + ' ' + colors[_.random(0, colors.length - 1)]
    products.push( new Product(title, _.random(10, 999), `img/${i + 1}.png`) );
  }
}

function drawProductCard(product) {
  const cardEl = document.createElement('DIV');
  const imgEl = document.createElement('IMG');
  const titleEl = document.createElement('P');
  const priceEl = document.createElement('P');
  const btnEl = document.createElement('BUTTON')

  cardEl.classList.add('product-card');
  imgEl.classList.add('product-card__img');
  titleEl.classList.add('product-card__title');
  priceEl.classList.add('product-card__price');
  btnEl.classList.add('product-card__btn');

  imgEl.setAttribute('src', product.img);
  titleEl.textContent = product.title;
  priceEl.textContent = product.price + '$';
  btnEl.textContent = 'Р’ РљРѕСЂР·РёРЅСѓ';
  btnEl.setAttribute('data-id', product.id)

  cardEl.append(imgEl);
  cardEl.append(titleEl);
  cardEl.append(priceEl);
  cardEl.append(btnEl);

  mainEl.append(cardEl);
}

function drawProducts() {
  for(let product of products) {
    drawProductCard(product)
  }
}

loadProducts();
drawProducts();
