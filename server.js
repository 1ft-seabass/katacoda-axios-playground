const axios = require('axios');

// Get Google search GET Request
axios.get('https://www.google.com/search?q=axios')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });