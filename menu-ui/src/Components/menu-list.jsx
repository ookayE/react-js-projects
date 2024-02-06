export default function MenuList({ list = [] }) {
  return (
    <div className="menu-list-container">
      {list && list.length ? list.map(listItem) : null}
    </div>
  );
}
