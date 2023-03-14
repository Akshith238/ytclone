import axios from "axios"; 

const BASE_URL= 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'4fb2cb4b05msh06e028da46f0709p1cd5cbjsn043f2f5c9440',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI=async(url) =>{
    const { data }=await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}