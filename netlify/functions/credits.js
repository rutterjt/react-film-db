const axios = require('axios');

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.API_KEY;

exports.handler = async (event, context) => {
  const { movieId } = event.queryStringParameters;

  const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

  try {
    const response = await axios.get(endpoint);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
