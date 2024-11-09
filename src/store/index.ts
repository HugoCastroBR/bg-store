import { configureStore } from "@reduxjs/toolkit"
import { userBasketSlice } from "./reducers/userBasket";

const store = configureStore({
  reducer:{
    userBasket:userBasketSlice.reducer,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const userBasketActions = userBasketSlice.actions
