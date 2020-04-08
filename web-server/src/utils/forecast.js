const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/441d720b77f9168f886a19d915126c92/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather services',undefined)
        } else if(body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined,
                body.daily.data[0].summary + 
                ' It is currently '+ body.currently.temperature + 
                ' degress out. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow +'. There is ' + 
                body.currently.precipProbability + 
                '% chance of rain.')
        }
    })
}

// const forecast = (latitude,longitude,callback) => {
//     const url = 'https://api.darksky.net/forecast/441d720b77f9168f886a19d915126c92/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

//     request({url: url,json:true}, (error,response)=>{
//         if(error){
//             callback('Unable to connect to weather services',undefined)
//         } else if(response.body.error) {
//             callback('Unable to find location')
//         } else {
//             callback(undefined,
//                 response.body.daily.data[0].summary + 
//                 ' It is currently '+ response.body.currently.temperature + 
//                 ' degress out. There is ' + 
//                 response.body.currently.precipProbability + 
//                 '% chance of rain.')
//         }
//     })
// }

module.exports = forecast