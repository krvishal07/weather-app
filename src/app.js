const express = require('express')
const app = express() 


const path = require('path')
const hbs  = require('hbs')


const forecast= require('./utils/forecast') 


//app.com/
//app.com/help
//app.com/about

//setting up views dir and handlebars
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')



//this is used for static thing which we want to serve to client.
app.use(express.static(publicPath));



app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)



// app.get('/products',(req,res)=>{
//     console.log(req.query)
//     res.send({
//         products: 'no products '
//     })
// })





app.get('',(req,res)=>{
    // res.send({
    //           name: 'base index'
    // }) 
    res.render('index',{
        title: 'Weather',
        name:'Vishal'
    })
})



app.get('/weather',(req,res)=>{ 

    if(!req.query.search){
       return res.send({
            error:'error no search iteam'
        })
    } 

    // res.send({
    //     address:req.query.search,
    //     location : 'location' 
    // })

    forecast(req.query.search,(error,data)=>{
        if(error) {
            return res.send({error})
        }
        res.send({
            temperature : data.temperature,
            weather_descriptions : data.weather_descriptions,

        })
    })
      
})



app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about',
        name : 'Vishal'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title : 'help',
        name : 'Vishal'
    })
})




//404 not found
app.get('*',(req,res)=>{
    //res.render('404') 
    res.send('this  is 404 page not found..')
})









//this is static page rendering 

//this is send all publicPath folder files and is access by type file name in url.
//app.use(express.static(publicPath));



//we can send(response) any type of data. 


// const readMe = {
//     app : 'home',
//     help : 'help page',
//     about : 'about page'
// }

// app.get('/',(req,res)=>{
//       res.send(readMe)
// })
// app.get('/help',(req,res)=>{
//     res.send('help Me !')
// })
// app.get('/about',(req,res)=>{
//     res.send('About Me...')
// })
// app.get('/weather',(req,res)=>{
//     res.send('Get weather...')
// })



app.listen(8000,()=>{
    console.log('Server is starting....')
})