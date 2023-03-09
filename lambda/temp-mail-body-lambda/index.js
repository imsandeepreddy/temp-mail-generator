const axios = require("axios");

exports.handler = async (event, context) => {
  const { email } = event.queryStringParameters;
  
  const options = {
    method: 'GET',
    url: `https://temp-mail44.p.rapidapi.com/api/v3/email/${email}/messages`,
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'temp-mail44.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message })
    };
  }
};
