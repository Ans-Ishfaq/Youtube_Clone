import React from 'react'
import axios from 'axios';

const BASE_URL='https://youtube138.p.rapidapi.com';
const options = {
    url:BASE_URL,
    params: {
      maxResult:'50'
    },
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  

  export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)

    return data;
  }


  