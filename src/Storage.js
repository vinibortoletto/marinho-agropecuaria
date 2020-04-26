import { createClient } from "contentful";

const client = createClient({
  space: "mnc6moy0ejlb",
  accessToken: "vtet4wWKIrpr0E1DPEKDHTZDnHywaPeThbzI1WwRldo",
});

export async function getProducts(setProducts) {
  try {
    let contentful = await client.getEntries("products");
    setProducts(contentful.items);
  } catch (error) {
    console.log(error);
  }
}

export function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));

  // localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
}

export function getStoredProducts(setProducts) {
  let storedProducts = JSON.parse(localStorage.getItem("products"));
  setProducts(storedProducts);

  storedProducts.length === 0 && console.log("empty");
}

// export function saveSelectedProduct(products) {
//   localStorage.setItem("products", JSON.stringify(products));
// }
