import { useState } from 'react';

import ListItem from './ListItem';

export default function List({ itemsCount }) {
  const initialState = Array.from({ length: itemsCount }).map((_, id) => ({
    id,
    label: 'Item #${id + 1}',
    value: Math.random(),
  }));

  const [items, setItems] = useState(initialState);

  const handleUpdate = (index) => {
    items[index].value = Math.random();
    setItems(items);
  };

  return (
    <>
      {/* <button>Delete first</button> */}
      <ul>
        {items.map((item, index) => (
          <ListItem index={index} item={item} onUpdate={handleUpdate} />
        ))}
      </ul>
    </>
  );
}
