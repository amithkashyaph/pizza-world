import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../features/cart/cartSlice';

const UpdateItemQuantity = ({ id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <h4 className="text-[14px]">{quantity}</h4>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
