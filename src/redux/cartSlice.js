import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        productsQuantity: 0,
    }, 
    reducers: { 
        addProduct: (state, action) => {
            const fakeID = Date.now()
            state.products.push({
                id: fakeID,
                productId: action.payload.id,
                price: action.payload.price,
                image: action.payload.image,
                totalPrice: action.payload.quantity * action.payload.price,
                quantity: action.payload.quantity,
                title: action.payload.title,
            })
            state.productsQuantity += 1;
            toast.success("Your Product has been added to the cart.")
        },
        clearCart: (state) => {
            state.products = [];
            state.productsQuantity = 0;
            state.totalPrice = 0;
            toast.error("Your cart has been cleared.")
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                product => product.id !== action.payload.id
            )
            state.productsQuantity -= 1;
            toast.error("Your Product has been removed from the cart")
        },
        increaseQuantity: (state, action) =>{
            const product = state.products.find(product => product.id === action.payload.productId)
            product.quantity += 1;
            product.totalPrice = product.quantity * action.payload.product.price
        },
        decreaseQuantity: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.productid)
            if(product.quantity <= 1){
                state.products = state.products.filter(
                    product => product.id !== action.payload.productid
                )
                state.quantity -= 1;
            }
            product.quantity -= 1;
            product.totalPrice = product.quantity * action.payload.product.price
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.products.reduce((total, cartItem) => {
        return total + cartItem.totalPrice ;
    }, 0);
}

export const {addProduct, clearCart, deleteProduct, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;