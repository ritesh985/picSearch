import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 85df2dc0d9b08325e70056a82c2182e5163d7515cbea8d51351928af2f2321fa'
    }
});