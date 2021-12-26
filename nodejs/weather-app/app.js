const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=9406de3bd3e9bd3452a5eab3b9fbc261&query=37.8267,-122.4233';

request({ url, json: true }, (error, response) => {
    console.log(response.body.current);
});