import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CARD,
});

export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
});

export const clearItems = (item) => ({
	type: CartActionTypes.CLEAR_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item,
});
