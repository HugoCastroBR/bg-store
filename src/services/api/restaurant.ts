import { restaurantApi } from "../../utils/constants";

export async function getRestaurantDetails() {
  try {
    const response = await fetch("https://api.allorigins.win/get?url="+restaurantApi+'/venue/9');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return JSON.parse(data.contents);

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


export  async function getRestaurantItems() {
  try {
    const response = await fetch("https://api.allorigins.win/get?url="+restaurantApi+'/menu');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return JSON.parse(data.contents);

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
