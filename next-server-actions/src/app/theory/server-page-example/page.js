async function ServerActionsExample() {
  async function fetchListOfProducts() {
    "use server";
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    return data.products;
  }

  const products = await fetchListOfProducts();
  console.log(products);

  return (
    <div>
      <h1>Server Actions Example - Server Components</h1>
    </div>
  );
}
export default ServerActionsExample;
