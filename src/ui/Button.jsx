import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick }) => {
  const baseStyle =
    'duration-400 inline-block rounded-full bg-yellow-400  font-semibold uppercase text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm';
  const styles = {
    primary: baseStyle + ' px-4 py-3',
    small: baseStyle + ' px-3 py-2 text-xs',
    round:
      baseStyle +
      ' px-2.5 py-1 md:px-3.5 py-2 bg-yellow-400 rounded-full text-sm',
    secondary:
      'duration-400 inline-block border border-2 border-stone-300 rounded-full bg-stone-200 px-4 py-3 font-semibold text-stone-400 hover:text-stone-500  uppercase transition-colors hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed',
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
