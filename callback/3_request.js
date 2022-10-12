const request = require('request')

const url = "https://pokeapi.co/api/v2/type"

const r = request(url,
    { json:true},
    function  ( err , response , body ){
    const tipos = response.body.result
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log(`--------------------`)
    });
}
)