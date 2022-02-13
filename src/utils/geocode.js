const request= require('request')


const geocode = (address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibWFwMTIzd29ybGQiLCJhIjoiY2t6YmkxbW50MTNvNjJubzFsNWR0eWpubyJ9.Jgs3DtL-7KptK4zpy-8A_g'
    request({ url : url,json: true},(error,response)=>{
           if(error) {
               //callback(error,undefined)
               callback('Unable to connect...',undefined)
           }else if(response.body.features.length===0){
               //callback(undefined,response.body.features)
               callback('Unable to find location.Try another services.',undefined)
           }else{ 
               callback(undefined,{
                   longitute:response.body.features[0].center[0],
                   latitute : response.body.features[0].center[1],
                   location : response.body.features[0].place_name
                })
           }
    })
}

module.exports = geocode