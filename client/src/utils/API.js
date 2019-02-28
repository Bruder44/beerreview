import axios from 'axios';

export default {
    createUser: function (data) {
        console.log("creating new user...");
        console.log(data);
        return axios.post('/api/beerRoutes/register', data);
    },

};