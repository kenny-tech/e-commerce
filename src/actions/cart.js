import { ADD_TO_CART } from './types';
import { REMOVE_FROM_CART } from './types';

export const addToCart = (product_id,product,price,thumbnail) =>
{
    return {
        type: ADD_TO_CART,
        payload: {
            product_id,
            product,
            price,
            thumbnail
        }
      }
}

export const removeFromCart = (product_id,price) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            product_id,
            price
        }
    }   
}


