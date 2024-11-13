import { BasketItem } from '../types/basket';
import { Restaurant, RestaurantItems } from '../types/restaurant';
import { basketActions, restaurantActions, restaurantItemsActions } from './index';

export function setRestaurant(restaurant: Restaurant) {
  return restaurantActions.SET_RESTAURANT(restaurant);
}

export function setRestaurantItems(restaurantItems: RestaurantItems) {
  return restaurantItemsActions.SET_RESTAURANT_ITEMS(restaurantItems);
}

export function addItem(item: BasketItem) {
  return basketActions.ADD_ITEM(item);
}

export function changeItemQuantity(item: BasketItem) {
  return basketActions.CHANGE_ITEM_QUANTITY(item);
}

export function addItemQuantity(amount: number, id: number) {
  return basketActions.ADD_ITEM_QUANTITY({ id, quantity: amount });
}