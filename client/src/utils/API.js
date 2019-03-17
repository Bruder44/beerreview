import axios from 'axios';

export default {
    createUser: function (data) {
        console.log("creating new user...");
        console.log(data);
        return axios.post('/api/beerRoutes/register', data);
    },

    getSome: function () {
        console.log("fetching beers for carousel");
        return axios.get('/api/beerRoutes/');
    },

    getOne: function () {
        console.log("Getting data about your beer of choice");
        return axios.get('/api/beerRoutes/:beer');
    }

};