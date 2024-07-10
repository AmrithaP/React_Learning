import { useState } from "react";

interface Props {
  items: string[];
  heading: String;
  // (item: string) => void
  onselectItem: (item: String) => void;
}

function ListGroup({ items, heading ,onselectItem}: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // Hook - to make it global, i.e. state will change overttime

  return (
    // only html or compoent data
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onselectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
