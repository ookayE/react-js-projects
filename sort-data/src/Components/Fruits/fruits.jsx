import { useEffect, useState } from "react";

function Fruits() {
  const [sort, setSort] = useState("");
  const [fruit, setFruit] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
    { id: 5, name: "Elderberry" },
    { id: 6, name: "Fig" },
    { id: 7, name: "Grape" },
    { id: 8, name: "Honeydew" },
  ]);

  function handleSort() {
    let fruitCopy = [...fruit];

    if (sort === "ascending") {
      fruitCopy = fruitCopy.sort((firstFruit, secondFruit) =>
        firstFruit.name.toLowerCase() > secondFruit.name.toLowerCase() ? 1 : -1
      );
      setFruit(fruitCopy);
    } else if (sort === "descending") {
      fruitCopy = fruitCopy.sort((firstFruit, secondFruit) =>
        firstFruit.name.toLowerCase() > secondFruit.name.toLowerCase() ? -1 : 1
      );
      setFruit(fruitCopy);
    }
  }

  useEffect(() => {
    handleSort();
  }, [sort]);

  return (
    <div className="sort-data-container">
      <h1>Fruits</h1>
      <div className="sort-dropdown-container">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          name="sort"
        >
          <option value="">Please select an option</option>
          <option value="ascending" id="ascending">
            Ascending A - Z
          </option>
          <option value="descending" id="descending">
            Descending Z - A
          </option>
        </select>

        <ul>
          {fruit.length > 0
            ? fruit.map((fruitItem) => (
                <li key={fruitItem.id}>{fruitItem.name}</li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default Fruits;
