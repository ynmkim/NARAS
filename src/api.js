import axios from 'axios';

export async function getCountries() {
  try {
    const res = await axios.get('https://naras-api.vercel.app/all');
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getSearchResults(query) {
  try {
    const res = await axios.get(
      `https://naras-api.vercel.app/search?keyword=${query}`
    );
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getCountry(code) {
  try {
    const res = await axios.get(`https://naras-api.vercel.app/code/${code}`);
    return res.data;
  } catch (e) {
    return null;
  }
}
