import { useEffect, useState } from "react";

export default function Breakfasts() {
  const [sort, setSort] = useState("");
  const [breakfast, setBreakfast] = useState([
    { id: 1, name: "Pancakes" },
    { id: 2, name: "Omelette" },
    { id: 3, name: "Waffles" },
    { id: 4, name: "French Toast" },
    { id: 5, name: "Bagel" },
    { id: 6, name: "Smoothie" },
    { id: 7, name: "Granola" },
    { id: 8, name: "Breakfast Burrito" },
  ]);

  function handleSort() {
    let listCopy = [...breakfast];

    if (sort === "ascending") {
      listCopy.sort((first, second) =>
        first.name.toLowerCase() > second.name.toLowerCase() ? 1 : -1
      );
      setBreakfast(listCopy);
    } else if (sort === "descending") {
      listCopy.sort((first, second) =>
        first.name.toLowerCase() < second.name.toLowerCase() ? 1 : -1
      );
    }
    setBreakfast(listCopy);
  }

  useEffect(() => {
    handleSort();
  }, [sort]);

  return (
    <div className="sort-data-container">
      <div className="sort-dropdown-container">
        <h1>Sort Breakfast Foods</h1>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          name="sort"
        >
          <option value="">Please Select an Option</option>
          <option value="ascending" name="ascending">
            Ascending Order A-Z
          </option>
          <option value="descending" name="descending">
            Descending Order Z-A
          </option>
        </select>

        <ul>
          {breakfast.length > 0
            ? breakfast.map((breakfastItem) => (
                <li key={breakfastItem.id}>{breakfastItem.name}</li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
