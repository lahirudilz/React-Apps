import MenuList from "./menu-list";
import "./style.css";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-conatainer">
      <MenuList list={menus} />
    </div>
  );
}
