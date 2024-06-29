import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handelToggleChildren(getCurrentlable) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlable]: !displayCurrentChildren[getCurrentlable],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.lable}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handelToggleChildren(item.lable)}>
            {displayCurrentChildren[item.lable] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.lable] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
