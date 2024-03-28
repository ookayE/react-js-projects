import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //we need to know if a listing is for sale or rent
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams(); //useParams lets you access the dynamic pieces of the URL matched by the <Route> pattern. It's particularly useful in scenarios where your app's behavior depends on information in the URL path.

  useEffect(() => {
    const fetchListings = async () => {
      try {
        //get reference
        const listingsRef = collection(db, "listings"); //colletion function creates reference to a specific collection in Firestore database - a group of documents that contain data. Collections takes the database instance and the path to the collection as arguments.

        //create query from reference
        const q = query(
          //query function is used to create a new query by specifiying conditions for filtering, ordering, and limiting the data returned from a Firestore collection.
          listingsRef,
          where("type", "==", params.categoryName), //where function is used within a query to specify a conditional filter. It takes THREE arguments: a field to filter on, a comparison operator (==, >, <,etc), and the value to compare against.

          orderBy("timestamp", "desc"), //order by is used to sort the data based on a specific field

          limit(10) //limit...limits the number of documents returned by the query.
        ); //we look in params.category name because we named the path path="/category/:categoryName" in app.js. This means the path will either say rent or sell

        //querySnapshot acts as a bridge between your Firestore database and your React application, allowing you to retrieve, iterate over, and manipulate data from Firestore in a way that can be efficiently integrated into your application's UI.
        const querySnapshot = await getDocs(q); //contains the results of the query at the moment it was executed. Also includes metadata about the snapshot, such as the size and whether there are any documents in the snapshot at all. Also provides methods for us to iterate over results (forEach).Each document snapshot provides methods to access the document's data (doc.data()) and metadata, such as the document's ID (doc.id).

        //loop through snapshot
        const listings = []; //init empty array to push

        // By converting the querySnapshot into an array of listing objects, we can dynamically render the retrieved listings based on their current state in the database. This is particularly useful for real-time or near-real-time applications where the database content may change frequently.
        querySnapshot.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching listings");
      }
    };

    fetchListings();
  }, [params.categoryName]);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.categoryName === "rent"
            ? "Places for rent"
            : "Place for sale"}
        </p>
      </header>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>No Listings for {params.categoryName}</p>
      )}
    </div>
  );
}

export default Category;
