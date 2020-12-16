export function addProductToCart(setCart, selectedProduct) {
  const localCart = JSON.parse(localStorage.getItem('cart'));

  selectedProduct.map((product) => {
    return localCart.push(product);
  });

  localStorage.setItem('cart', JSON.stringify(localCart));
  setCart(localCart);
}
