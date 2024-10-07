"use client";

import { fetchListOfProducts } from "@/actions";
import { useEffect, useState } from "react";

function ClientPageExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getListOfProducts() {
    setLoading(true);
    const data = await fetchListOfProducts();
    console.log(data);
    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }
  useEffect(() => {
    getListOfProducts();
  }, []);

  if (loading) return <h1>Loading data</h1>;

  return (
    <div>
      <h1>Client Page Server Actions Example</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item) => <li>{item.title}</li>)
        ) : (
          <h2>None</h2>
        )}
      </ul>
    </div>
  );
}

export default ClientPageExample;
