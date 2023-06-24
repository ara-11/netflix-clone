import { createSlice } from "@reduxjs/toolkit";

const initialState = { happy: "happy" };

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		openCart: (state) => {
			console.log(state.happy);
		},
	},
});

export const { openCart } = cartSlice.actions;
export default cartSlice.reducer;
