const request = require('request')

const forecast = (lat, long, callback) => {
    // const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoianVzZnVsdG9uIiwiYSI6ImNrb2MwYjEzZjAyMWkydnFvN21xZnBtN2oifQ.g3DfRP8H3yBSi3LNpyO5tg&limit=1`;

    const url = `http://api.weatherstack.com/current?access_key=95676a5f10570c1427817800e96eb739&query=${lat},${long}&units=f`

    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback("Unable to connect to location services")
        } else if (response.body.error) {
            callback("Unable to find location, try another search")
        } else {
            callback(undefined, {
                weatherDescription: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                precipitation: response.body.current.precip
            })
        }
    })
}

module.exports = forecast