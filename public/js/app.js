
//console.log('js folder file......')



// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })


// fetch('http://localhost:8000/weather?search=lucknow').then((response)=>{
//     response.json().then((data)=>{
//         // if(data.error) {
//         //     console.log(data.error)
//         // } else{
//         //     console.log(data.weather_descriptions)
//         //     console.log(data.temperature)
//         // } 
//         console.log(data)
//     })
// })

const weatherform=document.querySelector('form')
const search = document.querySelector('input') 

const massageOne=document.querySelector('#massage-1') // for class .className 
const massageTwo=document.querySelector('#massage-2')
massageOne.textContent = ''
massageTwo.textContent = ''


weatherform.addEventListener('submit',(e)=>{
    e.preventDefault() //this is prevent from refresh.
    const location = search.value


//http://localhost:8000
fetch('/weather?search='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error) {
            //console.log(data.error)
            massageOne.textContent = data.error

        } else{
            massageOne.textContent = 'Temperature :' +data.temperature
            massageTwo.textContent = 'weather_descriptions :'+data.weather_descriptions
        } 
        //console.log(data)
    })
})
    //console.log(location)
})