import React, { useState, useEffect, useRef } from 'react';

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
    // console.log(`render ${index}`);
    const renderCount = useRef(1);

    useEffect(() => {
      renderCount.current++;
    });

    return (
      <li>
        {item.label}: {item.value} (renders: {renderCount.current})
        <button onClick={() => onUpdate(index)}>Update</button>
      </li>
    );
  },
  (prevProps, nextProps) => {
    return nextProps.item.value === prevProps.item.value;
  },
);

export default ListItem;
