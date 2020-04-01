//const url = 'https://api.darksky.net/forecast/441d720b77f9168f886a19d915126c92/37.8267,-122.4233?units=si'

// request({ url: url,json: true}, (error,response)=> {
//     //console.log(response.body.currently)
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is ' + 
//         response.body.currently.precipProbability + '% chance of rain.')
//     }
// })

//geocoding

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFuc3l6emEiLCJhIjoiY2s4Zm1zeW41MDIyNzNwcGlyamVpdzNraCJ9.ho-Kla_48i0aJ08JBA9T1A&limit=1'

// request({url:geocodeURL, json: true}, (error,response)=>{

//     if(error){
//         console.log('Unable to connect to weather services')
//     } else if((response.body.features).length == 0){
//         console.log('Unable to find the location')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude + " , " + response.body.features[0].center[0])
//     }
// } )