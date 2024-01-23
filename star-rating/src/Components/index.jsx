import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ numberOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    // Set the 'rating' state to the index of the clicked star.
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    // Set the 'hover' state to the index of the star when the mouse enters it.
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    // Reset the 'hover' state to the current 'rating' to restore previous state.
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {/* Create an array of stars based on the 'numberOfStars' prop. */}
      {/* Use _ to skip over each star created via .map in the array and only receive index */}
      {[...Array(numberOfStars)].map((_, index) => {
        index++; // Increment the index by 1 (for 1-based indexing).

        // Return a 'FaStar' component representing a star with the following props:
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"} // Set class based on hover and rating.
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
