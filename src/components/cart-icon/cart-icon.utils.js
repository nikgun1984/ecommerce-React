/*
	this function accumulator that is added all items 
	in the cart and display them on the icon
*/

export const totalAmount = (items) => {
	return items.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.quantity;
	}, 0);
};
