import { configureStore } from "@reduxjs/toolkit"
import { restaurantSlice } from "./reducers/restaurant";

const store = configureStore({
  reducer:{
    restaurant:restaurantSlice.reducer,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const restaurantActions = restaurantSlice.actions
