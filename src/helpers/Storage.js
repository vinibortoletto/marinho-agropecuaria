import { createClient } from "contentful";

const client = createClient({
  space: "mnc6moy0ejlb",
  accessToken: "vtet4wWKIrpr0E1DPEKDHTZDnHywaPeThbzI1WwRldo",
});

export async function getProducts(setProducts, setSortedProducts) {
  try {
    let contentful = await client.getEntries("products");
    let products = contentful.items;

    // Sorts products by rating
    products = await products.sort((a, b) => b.fields.rating - a.fields.rating);

    setProducts(products);
    setSortedProducts(products);
  } catch (error) {
    console.log(error);
  }
}

export function getStoredProducts(setProducts, setSortedProducts) {
  let localSortedProducts = JSON.parse(localStorage.getItem("sortedProducts"));

  if (localSortedProducts !== null && localSortedProducts.length > 0) {
    setSortedProducts(JSON.parse(localStorage.getItem("sortedProducts")));
  } else {
    setSortedProducts(JSON.parse(localStorage.getItem("products")));
  }

  setProducts(JSON.parse(localStorage.getItem("products")));
}
export function saveProducts(products, sortedProducts) {
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("sortedProducts", JSON.stringify(sortedProducts));
}

export function getStoredSelectedProduct(setSelectedProduct) {
  setSelectedProduct(JSON.parse(localStorage.getItem("selectedProduct")));
}
export function saveSelectedProduct(selectedProduct) {
  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
}
