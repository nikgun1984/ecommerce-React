import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// localStorage library
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

const rootReducer = combineReducers({
	// user will be handled by  firebase storage, no need to persist it to localStorage
	user: userReducer,
	// only persist 'cart' to whitelist
	cart: cartReducer,
	directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
