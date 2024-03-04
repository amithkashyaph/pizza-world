import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link
        to="/menu"
        className="my-6 inline-block rounded-full bg-yellow-500 px-3 py-2 shadow-lg hover:bg-yellow-400"
      >
        &larr; Back to menu
      </Link>

      <p className="mt-10 text-center text-3xl">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
