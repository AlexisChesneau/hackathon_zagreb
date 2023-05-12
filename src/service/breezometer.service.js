import axios from 'axios';

const ACCESS_TOKEN = '0f9b19c1eb6c451499c04edb155646da';

export const getPollen = async (lat, lon) => {
  try {
    const url = `https://api.breezometer.com/pollen/v2/forecast/daily?lat=${
      lat}&lon=${lon}&days=3&key=${ACCESS_TOKEN}`;
    const { data } = await axios(url);
    return data
  } catch (error) {
    return { data: []};
  }
}

export const getAirQuality = async (lat, lon) => {
  try {
    const url = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${
      lat}&lon=${lon}&days=3&key=${ACCESS_TOKEN}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: []};
  }
  
}