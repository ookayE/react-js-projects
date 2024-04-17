import { useState } from "react";
import "./App.css";

const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const InputWithlLabel = ({ onInputChange }) => {
  return (
    <div>
      <input onChange={onInputChange} />
    </div>
  );
};

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} onRemoveItem={onRemoveItem} item={item} />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => (
  <>
    <li>
      <span>{item.title}</span>
      <span>{item.author}</span>
    </li>
    <button type="click" onClick={() => onRemoveItem(item)}>
      Remove
    </button>
  </>
);

function App() {
  const [searchTerm, setSearchterm] = useState("");
  const [stories, setStories] = useState(initialStories);

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const handleSearch = (event) => {
    setSearchterm(event.target.value);
    console.log(searchTerm);
  };

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStories);
  };

  return (
    <div className="App">
      <div>
        <h1>My Hacker Stories</h1>

        <strong>Search Stories: </strong>
        <InputWithlLabel
          id="thing"
          value={searchTerm}
          isFocused
          onInputChange={handleSearch}
        />
        <hr />

        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      </div>
    </div>
  );
}

export default App;
