import React from 'react';
import { useSelector } from 'react-redux';

const Username = () => {
  const userName = useSelector((state) => state.user.username);
  return (
    <div className="hidden text-sm font-semibold sm:block">{userName}</div>
  );
};

export default Username;
