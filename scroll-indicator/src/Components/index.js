import { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchData(getURL) {
    setLoading(true);

    const response = await fetch(getURL);
    const data = await response.json();

    try {
      if (data && data.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  console.log(data, loading);

  return (
    <div>
      <div>
        <h1>Custom Scroll Indicator</h1>

        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
