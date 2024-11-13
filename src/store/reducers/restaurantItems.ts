
import { createSlice } from "@reduxjs/toolkit";
import { RestaurantItems } from "../../types/restaurant";



export const restaurantItemsSlice = createSlice({
	name: "restaurantItemsSlice",
	initialState: {} as RestaurantItems,
	reducers: {
    SET_RESTAURANT_ITEMS: (state, { payload }: { payload: RestaurantItems }) => {
			return payload
		},
	},
});