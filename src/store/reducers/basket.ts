
import { createSlice } from "@reduxjs/toolkit";
import { Basket, BasketItem } from "../../types/basket";



export const basketSlice = createSlice({
	name: "basketSlice",
	initialState: {
		items: [] as BasketItem[],
		totalItems: 0,
		totalPrice: 0,
	} as Basket,
	reducers: {
    ADD_ITEM: (state, { payload }: { payload: BasketItem }) => {
			state.items.push(payload)
			state.totalItems += 1
			state.totalPrice += payload.price
		},
		CHANGE_ITEM_QUANTITY: (state, { payload }: { payload: BasketItem }) => {
			const item = state.items.find((item) => item.id === payload.id)
			if (item) {
				item.quantity = payload.quantity
			}
		},
		ADD_ITEM_QUANTITY: (state, { payload }: { payload: {
			id: number,
			quantity: number
		} }) => {
			const item = state.items.find((item) => item.id === payload.id)
			if(item?.quantity === 1 && payload.quantity === -1) {
				state.items = state.items.filter((item) => item.id !== payload.id)
				state.totalItems -= 1
				state.totalPrice -= item.price
				return
			}
			if (item) {
				item.quantity += payload.quantity
				state.totalItems += payload.quantity
				state.totalPrice += item.price * payload.quantity
			}
		},
	},
});