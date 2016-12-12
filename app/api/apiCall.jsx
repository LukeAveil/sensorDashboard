var axios = require('axios');

module.exports = {

  getSensors: function() {
    return axios.get("http://localhost:3000/sensors.json").then(function(result) {
      return result.data;
    })
  },

  getData: function() {
    return axios.get("http://localhost:3000/data.json").then(function(result) {
      return result.data;
    })
  }

}
