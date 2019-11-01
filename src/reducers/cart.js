import { ADD_TO_CART } from '../actions/types'

export const reducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case ADD_TO_CART:
            return { ...state, items: action.payload}
        default:
            return state;
    }
}
