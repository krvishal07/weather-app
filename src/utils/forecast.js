const request = require('request')

const forecast = (address,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=631996a637f08c045ff35fd1308ad87a&query='+address
    
    request({url : url,json : true},(error,response)=>{
        if(error){
            callback('unable to connect to services..',undefined)
        }else if(response.body.error){
            callback('Location is not correct..',undefined)
        }else{
            callback(undefined,{
                temperature: response.body.current.temperature,
                weather_descriptions : response.body.current.weather_descriptions[0],
                weather_icon : response.body.current.weather_icon
            })
        }
    })

}

module.exports = forecast