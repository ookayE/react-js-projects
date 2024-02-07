import MenuList from "./menu-list";

export default function MenuUi({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
