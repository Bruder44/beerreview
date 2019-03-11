import axios from 'axios';

export default {
    createUser: function (data) {
        console.log("creating new user...");
        console.log(data);
        return axios.post('/api/beerRoutes/register', data);
    },
    getBeers: function () {
        console.log("getting beers");
        return axios.get('/api/beerRoutes/');
    },

    getSome: function () {
        console.log("fetching beers for carousel");
        return axios.get('/api/beerRoutes/');
    }

};