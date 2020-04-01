const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const input = process.argv[2]
if(!input){
    console.log('Please provide address')
} else {
    geocode(input,(error,{latitude,longitude,location})=>{
        if(error){
            return console.log(error)
        }

        forecast(latitude, longitude, (error,forecastData)=>{
            if(error){
                return console.log(error)
            }
            
            console.log(location)
            console.log(forecastData)
        })
    })
}



// original

// const input = process.argv[2]
// if(!input){
//     console.log('Please provide address')
// } else {
//     geocode(input,(error,data)=>{
//         if(error){
//             return console.log(error)
//         }

//         forecast(-data.latitude, data.longitude, (error,forecastData)=>{
//             if(error){
//                 return console.log(error)
//             }
            
//             console.log(data.location)
//             console.log(forecastData)
//         })
//     })
// }
//console.log(input)
