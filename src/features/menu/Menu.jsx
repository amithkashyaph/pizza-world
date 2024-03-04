import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menuData = useLoaderData();
  return (
    <ul className="divide-y divide-stone-300">
      {menuData.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export const loader = async () => {
  const menuData = await getMenu();

  return menuData;
};

export default Menu;
