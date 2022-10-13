//dependencia a XMLHttpRequqest
const http = require('xmlhttprequest').XMLHttpRequest

const url = "https://jsonplaceholder.typicode.com/todos"

//funcion para conectar a una API publica
function get_data(endpoint){
    let promise = new Promise(function (resolve , rejected){
        
        //1. crear el objeto de conexion
        const h = new http()
        //2. abrir conexion a API
        h.open('GET' , endpoint)
        //3. enviar la request definida
        h.send()
        //4. una vez reciibida la response,
        //  tratar la informacion 
        h.onload =function(){
            if(h.status === 200){
                resolve(h.responseText)
            }else{
                rejected(h.status)
            }
        }
    }) 
    return promise
}

function exito(data){
    const tipos = JSON.parse(data)
    //recorrer el arreglo de tipos
    tipos.forEach(function (element) {
        console.log(`Title: ${element.title}`)
        console.log(`--------------------`)
    });
}

function fallo(status){
    console.log(status)
}

 get_data (url).
    then(function(response){
    exito(response)
}).catch(function(error){
    fallo(Error(error))
})