const path = require('path')
const express = require('express')
const hbs = require('hbs')

//console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname, '../public'))
const app = express()

//define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars engine and view location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setip static directory to serve
app.use(express.static(publicDirectory))

// app.get('',(req, res)=>{
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req,res)=>{
//     res.send({
//         name: 'Andrew',
//         age: 27
//     })
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About page.</h1>')
// })
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'Aryan Agarwal'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About me',
        name: 'Aryan Agarwal'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
      helpText: 'ok bro ok',  
      title: 'Help',
      name: 'Aryan Agarwal'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast: 30,
        location: 'Surat'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: 404,
        name: 'Aryan Agarwal',
        errorMessage: 'Help article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: 404,
        name: 'Aryan Agarwal',
        errorMessage: 'Page not found'
    })
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})