import { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Function to fetch data from the specified URL
  async function fetchData(geturl) {
    try {
      setLoading(true);

      const response = await fetch(geturl);
      const data = await response.json();

      // Check if data is valid and contains products
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  }

  // Effect hook to fetch data when the URL prop changes
  useEffect(() => {
    fetchData(url);
  }, [url]);

  // Function to calculate and update scroll percentage when the page is scrolled
  function handleScrollPercentage() {
    // Log scroll-related properties for debugging
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    // Calculate amount scrolled and total scrollable height
    const amountScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // Calculate and update scroll percentage state
    setScrollPercentage((amountScrolled / height) * 100);
  }

  // Effect hook to add scroll event listener and clean up on component unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage); // Remove scroll event listener on cleanup
    };
  }, []);

  // Log data and scroll percentage for debugging
  console.log(data, scrollPercentage);

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // Render scroll indicator and data if no errors and data is loaded
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }} // Set width of progress bar based on scroll percentage
          ></div>
        </div>
      </div>
      <div className="data-container">
        {/* Render product titles if data is available */}
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
