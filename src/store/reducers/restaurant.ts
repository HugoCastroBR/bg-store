import { Restaurant } from './../../types/restaurant';

import { createSlice } from "@reduxjs/toolkit";




export const restaurantSlice = createSlice({
	name: "restaurantSlice",
	initialState: {} as Restaurant,
	reducers: {
    SET_RESTAURANT: (state, { payload }: { payload: Restaurant }) => {
			return payload
		},
	},
});