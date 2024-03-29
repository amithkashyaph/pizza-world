import { formatCurrency } from '../../utils/helpers';
import DeleteItem from '../../ui/DeleteItem';
import UpdateItemQuantity from '../../ui/UpdateItemQuantity';

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; <span className="font-semibold">{name}</span>
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={id} quantity={quantity} />
        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
