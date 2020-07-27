import { createClient } from "contentful";

const client = createClient({
  space: "mnc6moy0ejlb",
  accessToken: "vtet4wWKIrpr0E1DPEKDHTZDnHywaPeThbzI1WwRldo",
});

export async function getProducts(setProducts) {
  try {
    let contentful = await client.getEntries("products");
    await setProducts(contentful.items);
  } catch (error) {
    console.log(error);
  }
}

export function getStoredProducts(setProducts) {
  setProducts(JSON.parse(localStorage.getItem("products")));
}
export function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

export function getStoredSelectedProduct(setSelectedProduct) {
  setSelectedProduct(JSON.parse(localStorage.getItem("selectedProduct")));
}
export function saveSelectedProduct(selectedProduct) {
  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
}

// export function saveSelectedProduct(products) {
//   localStorage.setItem("products", JSON.stringify(products));
// }
