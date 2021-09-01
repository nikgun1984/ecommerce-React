/*
	1. pass object to the function and newItem
	2. find item if its already in the card
	3. otherwise add item and create default value for quantity
*/

export const addItemToCart = (items, newItem) => {
	const existingItem = items.find((item) => item.id === newItem.id);
	if (existingItem) {
		return items.map((item) => {
			if (item.id === newItem.id) {
				return {
					...item,
					quantity: item.quantity + 1,
				};
			} else {
				return item;
			}
		});
	} else {
		return [...items, { ...newItem, quantity: 1 }];
	}
};

export const removeItemFromCart = (items, itemToRemove) => {
	const existingItem = items.find((item) => item.id === itemToRemove.id);

	if (existingItem.quantity === 1) {
		return items.filter((item) => item.id !== itemToRemove.id);
	}

	return items.map((item) =>
		item.id === itemToRemove.id
			? { ...item, quantity: item.quantity - 1 }
			: item
	);
};
