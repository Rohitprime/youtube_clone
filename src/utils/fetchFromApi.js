import axios from "axios";
const BaseUrl = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {maxResults: '50'},
    headers: {
        'X-RapidAPI-Key': '732a63b6a6mshc4fd2736b1fc3d6p1b6606jsn61c6bdd2df42',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
  };
  
export const fetchFromApi  = async (url)=>{
    const {data} = await axios.get(`${BaseUrl}/${url}`,options)
    return data;
}