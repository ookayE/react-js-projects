import { useEffect, useState } from "react";

function FilterCategory() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentSelectedCategory, setCurrenltSelectedCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });

      const result = await apiResponse.json();

      if (result && result.products.length > 0) {
        setLoading(false);
        setProducts(result.products);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const copyProducts = [...products];
  }, [currentSelectedCategory]);

  if (loading) {
    return <h3>Fetching. Please wait...</h3>;
  }

  const uniqueCategories =
    products && products.length > 0
      ? [...new Set(products.map((productItem) => productItem.category))]
      : [];

  console.log(uniqueCategories, "uniqueCagories");

  return (
    <div className="filter-products-container">
      <h1>Filter Products by Category</h1>
      <div className="filter-categories-container">
        {uniqueCategories.map((uniqueCategoryItem) => (
          <button
            onClick={() => setCurrenltSelectedCategory(uniqueCategoryItem)}
          >
            {uniqueCategoryItem}
          </button>
        ))}
      </div>
      <ul className="list-of-products">
        {products && products.length > 0
          ? products.map((productItem) => (
              <li key={productItem.id}>
                <p>{productItem.title}</p>
                <button>{productItem.category}</button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default FilterCategory;
