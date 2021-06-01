import { actionTypes } from "../constants/actionTypes";

export const setProducts = (products) =>{
    return{
        type : actionTypes.SET_PRODUCTS,
        payload : products
    };
};