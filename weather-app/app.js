const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please input a location');
} else {

    //Reusable code! 
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error);
        }

        forecast(data.lat, data.long, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }


            console.log(data.location);
            console.log(forecastData);
        })

    })
}