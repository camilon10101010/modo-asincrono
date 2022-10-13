const  axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//configuracion de request
let config = {
    url : url,
    method: 'get'
}

//realizar la operacion asincronica
axios(config)
    .then(function(response){
        console.log(response.data.results)
    }).then(function(data){
        data.forEach(function(tipo){
            console.log(`Tipo: ${tipo.name}`)
            console.log(`******************`)
        })
    })
    .catch(function(error){
        console.log(Error`Error : $error`)
    })