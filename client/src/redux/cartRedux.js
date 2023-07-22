import { createSlice } from "@reduxjs/toolkit";

const cartDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: cartDataFromLocalStorage ? cartDataFromLocalStorage.products : [],
    quantity: cartDataFromLocalStorage ? cartDataFromLocalStorage.quantity : 0,
    total: cartDataFromLocalStorage ? cartDataFromLocalStorage.total : 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    clearCart: (state) => {
        state.products = [];
        state.quantity = 0;
        state.total = 0;
    },
    // Add a new action to save cart data to localStorage
    saveCartToLocalStorage: (state) => {
        const { products, quantity, total } = state;
        localStorage.setItem("cart", JSON.stringify({
                                                products,
                                                quantity,
                                                total,
                                            })
         );
      },
      // Add a new action to clear cart data from localStorage
      clearCartFromLocalStorage: () => {
        localStorage.removeItem("cart");
      },
      setCartFromLocalStorage: (state, action) => {
        state.products = action.payload.products;
        state.quantity = action.payload.quantity;
        state.total = action.payload.total;
      },
  },
});

export const { addProduct, clearCart, saveCartToLocalStorage, clearCartFromLocalStorage, setCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;