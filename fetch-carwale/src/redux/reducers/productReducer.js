import { GET_PRODUCTS, PRODUCT_LOADING } from "../type";

const initialState = {
    products: [],
    loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCTS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };

        default:
            return state;
    }
}
