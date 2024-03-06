import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../../ui/DeleteItem';
import UpdateItemQuantity from '../../ui/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        ...pizza,
        quantity: 1,
        totalPrice: unitPrice * 1,
        pizzaId: id,
      }),
    );
  };

  return (
    <li className="flex list-none gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-600">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}
          {!soldOut && !isInCart && (
            <div className="space-x-2">
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            </div>
          )}
          {isInCart && (
            <div className="flex gap-2 sm:gap-8">
              <UpdateItemQuantity id={id} quantity={currentQuantity} />
              <DeleteItem id={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
