var request = require('request');

var getWeather = (lat, log, callback) => {
    request({
        url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`,
        json:true
    },(error, response, body) => {
        if(error) {
            console.log("Unable to connect to the google weather");
        } else if(response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if(response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
    })
}

module.exports.getWeather = getWeather;