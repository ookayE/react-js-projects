import MenuItem from "./menu-item";

// MenuList component responsible for rendering the list of menu items
export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {/* Map over the list of menu items and render each MenuItem component */}
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
