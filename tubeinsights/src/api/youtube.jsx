// Desc: This file contains the YouTube API configuration. It uses the axios library to make requests to the YouTube API. It exports the axios instance with the base URL and the API key.
import axios from 'axios';


const KEY = 'AIzaSyBdh1Kv798gtMp3feAN2eoauJG0pod-9Vg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
    }
});

