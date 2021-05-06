const request = require('request')
const geocode = require('./utils/geocode')


//Reusable code! 
geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})