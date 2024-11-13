import { configureStore } from "@reduxjs/toolkit"
import { restaurantSlice } from "./reducers/restaurant";
import { basketSlice } from "./reducers/basket";
import { restaurantItemsSlice } from "./reducers/restaurantItems";

const store = configureStore({
  reducer:{
    restaurant:restaurantSlice.reducer,
    restaurantItems:restaurantItemsSlice.reducer,
    basket:basketSlice.reducer,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const restaurantActions = restaurantSlice.actions
export const basketActions = basketSlice.actions
export const restaurantItemsActions = restaurantItemsSlice.actions
