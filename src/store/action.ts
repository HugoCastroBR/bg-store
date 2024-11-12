import { Restaurant } from '../types/restaurant';
import { restaurantActions } from './index';

export function setRestaurant(restaurant: Restaurant) {
  return restaurantActions.SET_RESTAURANT(restaurant);
}