export const initialState = {
    cart: [],
    user: null
};

export const cartTotal = (cart) => 
    cart?.reduce((amount, item) => Number(item.price) + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.log(`Product is not in cart!`);
            }
            return {
                ...state,
                cart: newCart
            }
        case "BUY":
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
};

export default reducer;