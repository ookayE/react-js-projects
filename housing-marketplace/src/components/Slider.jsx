import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase.config";
import Spinner from "./Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Defines an asynchronous function to fetch listings from Firestore.
    const fetchListings = async () => {
      // Gets a reference to the Firestore collection named 'listing'.
      const listingsRef = collection(db, "listings");

      // Creates a query object that orders the listings by 'timestamp' in descending order,
      // and limits the results to the first 5 listings.
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));

      // Executes the query and awaits the results, storing them in querySnap.
      const querySnap = await getDocs(q);

      // Initialize an empty array to hold the listings data.
      let listings = [];

      // Loops through each document in the query snapshot.
      querySnap.forEach((doc) => {
        // Pushes an object containing the document's ID and data into the listings array.
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      console.log(listings);
      // Updates the 'listings' state with the fetched data.
      setListings(listings);
      // Sets the 'loading' state to false to indicate that data fetching is complete.
      setLoading(false);
    };

    // Calls the fetchListings function to execute the fetching process.
    fetchListings();
  }, []); // The empty dependency array ensures this effect runs only once after the initial render.

  if (loading) {
    return <Spinner />;
  }

  return (
    listings && (
      <>
        <p className="exploreHeading">Recommended</p>
        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {listings.map(({ data, id }) => {
            console.log(data);
            return (
              <SwiperSlide
                key={id}
                onClick={() => navigate(`/category/${data.type}/${id}`)}
              >
                <div
                  style={{
                    background: `url(${data.imageUrls}) center no-repeat`,
                    backgroundSize: "cover",
                    width: "100%",
                    height: "300px",
                  }}
                  className="swiperSlideDiv"
                ></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    )
  );
}

export default Slider;
