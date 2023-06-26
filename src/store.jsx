import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/cart/userSlice";

const Store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export default Store;
