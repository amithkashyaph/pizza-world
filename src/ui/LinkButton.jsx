import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="my-4 inline-block  bg-blue-950 px-4 py-2 text-sm text-blue-100 hover:text-blue-300"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
