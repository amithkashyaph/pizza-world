import React from 'react';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
import { useFetcher } from 'react-router-dom';

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="small">Make your order priority</Button>
    </fetcher.Form>
  );
};

export const action = async ({ request, params }) => {
  const data = { priority: true };

  await updateOrder(params.orderId, data);
  return null;
};

export default UpdateOrder;
