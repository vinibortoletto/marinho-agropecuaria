export function addProductToCart(setCart, selectedProduct) {
  const localCart = JSON.parse(localStorage.getItem('cart'));

  localCart.push(selectedProduct);
  localStorage.setItem('cart', JSON.stringify(localCart));

  setCart(localCart);
}
