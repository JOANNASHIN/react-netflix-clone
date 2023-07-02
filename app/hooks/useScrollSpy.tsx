import { useState } from 'react';

const useScrollSpy = () => {
  const [activeKey, setActiveKey] = useState(null);

  const LeftVisualItem = ({ children, id }) => {
    return <div className={activeKey === id ? 'active' : ''}>{children}</div>;
  };

  const getCurrentActive = () => {
    return activeKey;
  };

  const updateActive = (key: string) => {
    setActiveKey(key);
  };

  return {
    LeftVisualItem,
    getCurrentActive,
    updateActive,
  };
};

export default useScrollSpy;
