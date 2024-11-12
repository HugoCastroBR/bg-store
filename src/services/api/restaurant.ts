import { restaurantApi } from "../../utils/constants";

export default async function getRestaurantDetails() {
  try {
    const response = await fetch(restaurantApi, {
      mode: 'cors',  
      method: 'GET',
      headers: {
        'Referrer-Policy': 'strict-origin-when-cross-origin',  
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
