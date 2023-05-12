import axios from 'axios';

const ACCESS_TOKEN = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg'

export const searchAddress = async (address) => {
  try {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${
      address}.json?limit=5&language=fr-FR&access_token=${ACCESS_TOKEN}`
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return [];
  }

}