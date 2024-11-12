// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

const fetchData = async () => {
  try {
    const response = await fetch('https://cdn-dev.preoday.com/challenge/menu', {
      headers: {
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);

    fs.writeFileSync('./src/data.json', JSON.stringify(data));
    console.log('Data fetched and saved to data.json');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
