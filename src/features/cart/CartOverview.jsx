import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartTotalAmount, getCartTotalQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const cartTotalQuantity = useSelector(getCartTotalQuantity);
  const cartTotalAmount = useSelector(getCartTotalAmount);
  if (!cartTotalQuantity) {
    return null;
  }
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:p-6">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{cartTotalQuantity} Pizzas</span>
        <span>{formatCurrency(cartTotalAmount)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
