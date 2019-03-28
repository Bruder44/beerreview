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
    },

    getOne: function (_id) {
        console.log("Getting data about your beer of choice " + _id);
        return axios.get('/api/beerRoutes/beer/'+_id);
    },
    
    uploadBeer: function (data) {
        console.log("adding new beer to database...");
        console.log(data);
        return axios.post("/api/beerRoutes/newBeer", data);

    }
};