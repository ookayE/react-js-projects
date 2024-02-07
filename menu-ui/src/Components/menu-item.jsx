import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

// MenuItem component responsible for rendering a single menu item
export default function MenuItem({ item }) {
  // State to manage the visibility of children for the current menu item
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  // Function to toggle the visibility of children for the current menu item
  function handleToggleChildren(currentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        {/* Render the label of the current menu item */}
        <p>{item.label}</p>
        {/* Render an icon to toggle the visibility of children if they exist */}
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {/* Render a plus icon if children are not visible, otherwise render a minus icon */}
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {/* Render the list of children if they exist and are visible */}
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
