import * as ActionTypes from '../types';

const initialState =  {
    isLoading: false,
    errMess: null,
    product: undefined
};

export const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.PRODUCT_FETCHED:
            return { ...state, isLoading: false, errMess: null, allProduct:action.payload };

        case ActionTypes.PRODUCT_LOADING:
            return { ...state, isLoading: true, errMess: null, allProduct: [] };

        case ActionTypes.PRODUCT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};