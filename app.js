const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=b38590fe2dd6f2e0509f2053ff80b1f2&query=Redmond&units=f'
const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiZGF3bmNyb25pbiIsImEiOiJja2dqc2F1cTYwdTFiMnpuc2Y3OGEwemVvIn0.HpV2djEIl_V0fqBOXobnrA"

request({ url: url, json: true}, (error, res) => {
    if (error) {
        console.log('Unable to connect to weather service')
    } else if (res.body.error) {
        console.log('Unable to find location')
    } else { 
        let temperature = res.body.current.temperature
        let feelslike = res.body.current.feelslike
        console.log(`It is currently ${temperature} degrees outside. It feels like ${feelslike} degrees.`)
    }
})


request({ url: geoUrl, json: true}, (error, res) => {
    if(error) {
        console.log('Unable to connect to geocoding service')
    } else if (!res.body.features[0]) {
        console.log("No matching Results")
    } else {
        console.log(res.body.features[0].center)
    }
})