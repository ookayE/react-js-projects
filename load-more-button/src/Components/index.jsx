import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  // Function to fetch products from an API
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      // Check if there are products in the result and update the state
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  //useEffect to fetch products 'count' state changes
  useEffect(() => {
    fetchProducts();
  }, [count]);

  //useEffect to check if there are 100 products and disable the button
  useEffect(() => {
    if (products && products.length === 100) setDisabled(true);
  });

  // If data is loading, display a loading message
  if (loading) {
    return <div>Data is loading. Please wait!</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {/* Display the products if there are any */}
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>
                  {item.brand}
                  <br />
                  {item.title}
                </p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        {/* Button to load more products, disabled if 'disabled' state is true */}
        <button disabled={disabled} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>

        {/* Display a message if the button is disabled */}
        {disabled ? <p>No more products to show!</p> : null}
      </div>
    </div>
  );
}
