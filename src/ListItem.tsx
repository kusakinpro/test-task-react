import React, { useEffect, useRef, useState } from 'react';

interface IListItem {
  index: number;
  item: {
    id: number;
    label: string;
    value: number;
  };
  onUpdate: (index: number) => void;
}

const ListItem: React.FC<IListItem> = React.memo(
  ({ index, item, onUpdate }) => {
    console.log(`render ${index}`);
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
      setRenderCount((prevRenderCount) => prevRenderCount + 1);
    }, [item]);

    return (
      <li>
        {item.label}: {item.value} (renders: {renderCount})
        <button onClick={() => onUpdate(index)}>Update</button>
      </li>
    );
  },
  (prevProps, nextProps) => {
    if (nextProps.item.value !== prevProps.item.value) {
      return false;
    } else {
      return true;
    }
  },
);

export default ListItem;
