import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; 
        if (existingItem) {
            // If item alre        } else {
            // If item does not exist, add it to the cart with quantity 1
            stat    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {


state.items = state.items.filter(item => item.name !== action.payload);            
    },

structure the product name and new quantity from the action payload
        // Find the item in the cart that matches the given name
        const itemToUpdate = state.items.find(item => item.name === name);
             (itemToUpdate) {
         });

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
