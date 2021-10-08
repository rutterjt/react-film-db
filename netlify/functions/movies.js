const axios = require('axios');

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

exports.handler = async (event, context) => {
  const { term, page } = event.queryStringParameters;

  const endpoint = term
    ? `${SEARCH_BASE_URL}${term}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;

  try {
    const response = await axios.get(endpoint);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    console.log('ERROR');
    console.log(err);
    return {
      statusCode: 404,
      body: JSON.stringify(err.toString()),
    };
  }
};
