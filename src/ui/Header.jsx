import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className="grow border-b border-stone-200 bg-yellow-500 px-4 py-3 text-center uppercase tracking-widest shadow-lg sm:flex sm:items-center sm:justify-between">
      <Link
        to="/"
        className="flex items-center justify-center gap-2 font-roboto text-xl sm:text-2xl"
      >
        <img src="../../public/pizza.png" className="w-9" />
        <span>Pizza World</span>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
