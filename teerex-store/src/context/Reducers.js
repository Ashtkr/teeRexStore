export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                products: action.payload,
                cart: []
            }
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
            };
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                ),
            };
        default:
            return state;
    }
}

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_BY_COLOR":
            return { ...state, color:action.payload};
        case "FILTER_BY_GENDER":
            return { ...state, gender: action.payload };
        case "FILTER_BY_PRICE":
            return { ...state, price: action.payload };
        case "FILTER_BY_TYPE":
            return { ...state, type: action.payload };
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload };
        default:
            return state;
    }
}