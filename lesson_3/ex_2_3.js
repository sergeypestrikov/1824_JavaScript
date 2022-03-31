// Предположим, есть сущность корзины. Нужно реализовать функционал
// подсчета стоимости корзины в зависимости от находящихся в ней товаров.

let cart = [{name:"phone", price:50}, {name:"watch", price:30}, {name:"notebook", price:100}}];
let cart_price = 0;
for (let n of cart) {
cart_price += n.price;
console.log("Товар" + n.name + "стоит" + n.price);
}
console.log("Стоимость корзины" + cart_price + "руб");


// a. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(cart) {
let cartPrice += n.price;
}
return cartPrice;
console.log("Стоимость корзины" + countBasketPrice(cart) + "руб");

