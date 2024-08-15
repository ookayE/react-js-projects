import { useEffect, useState } from "react";

function FilterCategory() {
  // State variables to manage loading status, products, selected categories, and filtered items
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Function to fetch products from the API
  async function fetchProducts() {
    try {
      setLoading(true); // Set loading to true before fetching data
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });

      const result = await apiResponse.json(); // Parse the response JSON

      if (result && result.products.length > 0) {
        setLoading(false); // Set loading to false once data is fetched
        setProducts(result.products); // Set the fetched products
        setFilteredItems(result.products); // Initialize filtered items with all products
      }
    } catch (error) {
      console.log(error); // Log any errors
      setLoading(false); // Set loading to false in case of error
    }
  }

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Update filtered items based on selected categories or products
  useEffect(() => {
    const copyProducts = [...products];
    setFilteredItems(
      selectedCategories.length > 0
        ? copyProducts.filter((productItem) =>
            selectedCategories.includes(productItem.category.toLowerCase())
          )
        : copyProducts
    );
  }, [products, selectedCategories]); // Dependencies: products and selectedCategories

  // Function to toggle category selection
  const toggleCategory = (category) => {
    const lowerCaseCategory = category.toLowerCase();
    setSelectedCategories(
      (prevSelectedCategories) =>
        prevSelectedCategories.includes(lowerCaseCategory)
          ? prevSelectedCategories.filter((cat) => cat !== lowerCaseCategory) // Remove category if already selected
          : [...prevSelectedCategories, lowerCaseCategory] // Add category if not selected
    );
  };

  // Display loading message if data is being fetched
  if (loading) {
    return <h3>Fetching. Please wait...</h3>;
  }

  // Get unique categories from the products
  const uniqueCategories =
    products && products.length > 0
      ? [...new Set(products.map((productItem) => productItem.category))]
      : [];

  console.log(uniqueCategories, "uniqueCategories");

  return (
    <div className="filter-products-container">
      <h1>Filter Products by Category</h1>
      <div className="filter-categories-container">
        {uniqueCategories.map((uniqueCategoryItem) => (
          <button
            key={uniqueCategoryItem}
            onClick={() => toggleCategory(uniqueCategoryItem)}
            style={{
              backgroundColor: selectedCategories.includes(
                uniqueCategoryItem.toLowerCase()
              )
                ? "lightblue"
                : "white",
            }}
          >
            {uniqueCategoryItem}
          </button>
        ))}
      </div>
      <ul className="list-of-products">
        {filteredItems && filteredItems.length > 0
          ? filteredItems.map((productItem) => (
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
