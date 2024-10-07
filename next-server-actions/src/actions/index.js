"use server";

export async function fetchListOfProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return data?.products;
}