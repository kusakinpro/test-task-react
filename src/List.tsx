import { useCallback, useState } from 'react';

import ListItem from './ListItem';

interface IList {
  itemsCount: number;
}

export default function List({ itemsCount }: IList) {
  const initialState = Array.from({ length: itemsCount }).map((_, id) => ({
    id,
    label: `Item #${id + 1}`,
    value: Math.random(),
  }));

  const [items, setItems] = useState(initialState);

  const handleUpdate = (index: number) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = { ...newItems[index], value: Math.random() };
      return newItems;
    });
  };

  return (
    <>
      {/* <button>Delete first</button> */}
      <ul>
        {items.map((item, index) => (
          <ListItem key={item.id.toString()} index={index} item={item} onUpdate={handleUpdate} />
        ))}
      </ul>
    </>
  );
}
