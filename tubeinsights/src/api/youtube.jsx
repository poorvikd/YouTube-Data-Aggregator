import axios from 'axios';


const KEY = 'AIzaSyBdh1Kv798gtMp3feAN2eoauJG0pod-9Vg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
    }
  });
