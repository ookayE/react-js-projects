import { fetchListOfProducts } from "@/actions";

async function ServerActionsExample() {
  const products = await fetchListOfProducts();
  console.log(products);

  return (
    <div>
      <h1>Server Actions Example - Server Components</h1>

      <ul>
        {products && products.length > 0 ? (
          products.map((item) => <li>{item.title}</li>)
        ) : (
          <h2>No</h2>
        )}
      </ul>
    </div>
  );
}
export default ServerActionsExample;
