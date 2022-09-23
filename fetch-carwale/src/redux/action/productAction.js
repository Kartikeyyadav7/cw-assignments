import axios from 'axios'
import { GET_PRODUCTS, PRODUCT_LOADING } from "../type";

export const getProducts = (pageNumber) => (dispatch) => {
    dispatch(setLoadingProduct());
    axios
        .get(`https://reqres.in/api/users/?page=${pageNumber}`)
        .then((res) => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data.data
            });
            console.log(res.data.data)
        })
        .catch((err) => {
            const error = err.response
            dispatch({
                type: GET_PRODUCTS,
                payload: null,
            });
            console.log(error)
        });
};

export const setLoadingProduct = () => {
    return {
        type: PRODUCT_LOADING,
    };
};
