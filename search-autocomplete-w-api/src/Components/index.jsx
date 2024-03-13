import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

// Defines the main component for search autocomplete functionality
export default function SearchAutocomplete() {
  // State hooks for various aspects of the component
  const [loading, setLoading] = useState(false); // Tracks whether data is being loaded
  const [users, setUsers] = useState([]); // Stores the list of user names fetched
  const [error, setError] = useState(null); // Stores any errors that might occur during fetching
  const [searchParam, setSearchParam] = useState(""); // Stores the current search input by the user
  const [showDropdown, setShowDropdown] = useState(false); // Controls the visibility of the suggestions dropdown
  const [filteredUsers, setFilteredUsers] = useState([]); // Stores filtered users based on search input

  // Handles changes to the search input field
  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      // Filters users based on the search query if the query length is more than 1
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().includes(query))
          : [];

      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      // Hides the dropdown if the query length is 1 or less
      setShowDropdown(false);
    }
  }

  // Handles clicks on the suggestions, updating the search field and hiding the dropdown
  function handleClick(e) {
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  }

  // Fetches the list of users asynchronously
  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        // Maps the fetched users to their first names and updates state
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  // Fetches the list of users once on component mount
  useEffect(() => {
    fetchListOfUsers();
  }, []);

  // Renders the component UI
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        // Displays a loading message while data is being fetched
        <h1>Loading Data...</h1>
      ) : (
        // Search input field
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users..."
          onChange={handleChange}
          type="text"
        />
      )}

      {showDropdown && (
        // Renders the suggestions dropdown if applicable
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
