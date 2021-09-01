import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

// memoised selector to keep it in the same memory address
// for re-use
export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
	items.reduce((accumulator, nextItem) => accumulator + nextItem.quantity, 0)
);

export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
	items.reduce(
		(accumulator, nextItem) => accumulator + nextItem.quantity * nextItem.price,
		0
	)
);
