import axios from 'axios';

export default {
    createUser: function (data) {
        console.log("creating new user...");
        return axios.post('/api/beerRoutes/register', data);
    },

};