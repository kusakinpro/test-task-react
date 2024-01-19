import { useRef, memo } from 'react';

interface IListItem {
  index: number;
  item: {
    id: number;
    label: string;
    value: number;
  };
  onUpdate: (index: number) => void;
}

export default memo(function ListItem({ index, item, onUpdate }: IListItem) {
  console.log(`render IListItem ${index}`);
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <li>
      {item.label}: {item.value} (renders: {renderCount.current})
      <button onClick={() => onUpdate(index)}>Update</button>
    </li>
  );
});
