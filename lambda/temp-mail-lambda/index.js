const axios = require("axios");

exports.handler = async (event, context) => {
  const options = {
    method: 'POST',
    url: 'https://temp-mail44.p.rapidapi.com/api/v3/email/new',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'temp-mail44.p.rapidapi.com'
    },
    data: '{"key1":"value","key2":"value"}'
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
