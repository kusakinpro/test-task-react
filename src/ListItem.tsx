import { useEffect, useState } from 'react';

export default function ListItem({ index, item, onUpdate }) {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [item]);

  const handleClick = () => {
    onUpdate(index);
  };

  return (
    <li>
      {item.label}: {item.value} (renders: {renderCount})
      <button onClick={handleClick}>Update</button>
    </li>
  );
}
