import { useEffect, useState } from "react";
import { BsArrowRightCircleFill, bSarrowleftCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (errorMessage !== null) {
    return <div>Error occurred: {errorMessage}</div>;
  }

  return (
    <div className="container">
      <bSarrowleftCircleFill className="arrow arrow-left" />
      {images && ImageSlider.length
        ? images.map((imageItem) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className="current-image"
            />
          ))
        : null}

      <bSarrowrightCircleFill className="arrow arrow-right" />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className="current-indicator"></button>
            ))
          : null}
      </span>
    </div>
  );
}
