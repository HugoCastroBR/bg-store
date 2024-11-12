import { restaurantApi } from "../../utils/constants";

export default async function getRestaurantDetails() {
  try {
    const response = await fetch("https://api.allorigins.win/get?url="+restaurantApi);

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
