import { useCallback, useMemo, useState } from 'react';

import ListItem from './ListItem';

interface IList {
  itemsCount: number;
}

export default function List({ itemsCount }: IList) {
  console.log(`render List`);

  /* 
    Обернул в useMemo, 
    чтобы вычислить initialState только при изменении itemsCount.
  */
  const initialState = useMemo(() => {
    return Array.from({ length: itemsCount }).map((_, id) => ({
      id,
      label: `Item #${id + 1}`,
      value: Math.random(),
    }));
  }, [itemsCount]);

  const [items, setItems] = useState(initialState);

  /* 
    Вместо копирования массива и изменения его элемента,
    использовал функцию map для более чистого кода.
    Так же все обернул useCallback, 
    чтобы избежать создания новой функции при каждом рендере
  */
  const handleUpdate = useCallback(
    (index: number) => {
      setItems((prevItems) =>
        prevItems.map((item, i) => (i === index ? { ...item, value: Math.random() } : item)),
      );
    },
    [itemsCount],
  );

  return (
    <>
      {/* <button>Delete first</button> */}
      <ul>
        {items.map((item, index) => (
          <ListItem key={item.id} index={index} item={item} onUpdate={handleUpdate} />
        ))}
      </ul>
    </>
  );
}
