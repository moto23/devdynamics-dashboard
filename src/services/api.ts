import axios from 'axios';

export const fetchDevActivity = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/moto23/dev-activity-data/db');
    return response.data.devActivity;
  } catch (error) {
    console.error('Error fetching developer activity:', error);
    throw error;
  }
};
