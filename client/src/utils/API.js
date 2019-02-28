import axios from 'axios';

export default {
    createUser: function (data) {
        console.log("creating new user...");
        return axios.post('/api/beerRoutes/register', data);
    },
    getBeers: function () {
        console.log("getting beers");
        return axios.get('/api/beerRoutes/');
    },

};