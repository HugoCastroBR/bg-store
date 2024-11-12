
import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../../types/restaurant";



export const restaurantSlice = createSlice({
	name: "restaurantSlice",
	initialState: {} as Restaurant,
	reducers: {
    SET_RESTAURANT: (state, { payload }: { payload: Restaurant }) => {
			return payload
		},
	},
});