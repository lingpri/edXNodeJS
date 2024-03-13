console.log("hello");

const axios = require('axios');

// Define the genre and sorting parameters
const genre = 'Action, Adventure, Drama';
const sortBy = 'imdb_rating'; // Assuming you want to sort by IMDb rating

// Make a GET request to the API endpoint with query parameters
axios.get(`https://jsonmock.hackerrank.com/api/tvseries?genre=${genre}`)
    .then(response => {
        // Handle the response data
        const seriesData = response.data.data; // Accessing the data array
        seriesData.sort((a, b) => b[sortBy] - a[sortBy]); // Sorting the data by IMDb rating

        console.log(seriesData);


    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
