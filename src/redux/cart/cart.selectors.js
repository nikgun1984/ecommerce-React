import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

// memoised selector to keep it in the same memory address
// for re-use
export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(items) => (item) =>
		item.reduce((accumulator, nextItem) => accumulator + nextItem.quantity, 0)
);
