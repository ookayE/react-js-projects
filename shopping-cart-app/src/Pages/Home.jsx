import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../Components/Product-tile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  //fetch products from fake api store
  async function fetchListOfProducts() {
    try {
      setLoading(true);
      const response = await fetch(`http://fakestoreAPI.com/products`);

      const data = await response.json();

      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //fetch products on page load
  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127, 29, 29"
            visible={true}
          />
        </div>
      ) : (
        // wrangle data, display on page:
        <div className="min-h-[80vh] grid sm:grid-cols-2 md: grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile product={productItem} /> //pass to our ProductTile component
              ))
            : null}
        </div>
      )}
    </div>
  );
}
