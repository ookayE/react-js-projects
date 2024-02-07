import MenuList from "./menu-list";

export default function MenuUi({ menus = [] }) {
  return (
    <div className="tree-view-container">
      {/* Render the MenuList component with the list of menus */}
      <MenuList list={menus} />
    </div>
  );
}
