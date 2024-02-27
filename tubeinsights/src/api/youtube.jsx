// Desc: This file contains the YouTube API configuration. It uses the axios library to make requests to the YouTube API. It exports the axios instance with the base URL and the API key read from the env file.
import axios from 'axios';


const KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
    }
});

