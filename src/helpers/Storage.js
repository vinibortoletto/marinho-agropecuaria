import { createClient } from 'contentful';

const client = createClient({
  space: 'mnc6moy0ejlb',
  accessToken: 'vtet4wWKIrpr0E1DPEKDHTZDnHywaPeThbzI1WwRldo',
});

export async function getProducts(setProducts, setSortedProducts) {
  try {
    const contentful = await client.getEntries('products');
    let products = contentful.items;

    // Sorts products by rating
    products = await products.sort((a, b) => b.fields.rating - a.fields.rating);

    setProducts(products);
    setSortedProducts(products);
  } catch (error) {
    console.log(error);
  }
}

export function saveProducts(products, sortedProducts) {
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('sortedProducts', JSON.stringify(sortedProducts));
}

export function getLocalProducts(setProducts, setSortedProducts) {
  const localProducts = JSON.parse(localStorage.getItem('products'));
  const localSortedProducts = JSON.parse(localStorage.getItem('sortedProducts'));

  if (
    localProducts === null ||
    localProducts.length === 0 ||
    localSortedProducts === null ||
    localSortedProducts.length === 0
  ) {
    getProducts(setProducts, setSortedProducts);
  } else {
    setProducts(localProducts);
    setSortedProducts(localSortedProducts);
  }
}
