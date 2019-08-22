const axios = require('axios');

// Get HTTPbin GET Request
// It is copy response call.
axios.get('https://httpbin.org/get')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });