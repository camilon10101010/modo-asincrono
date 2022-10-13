//dependencia a XMLHttpRequqest
const http = require('xmlhttprequest').XMLHttpRequest

const url = "https://rickandmortyapi.com/api/character"

const exito = data => {
    const tipos = JSON.parse(data).results
    //recorrer el arreglo de tipos
    tipos.forEach(function (element) {
        console.log(`Nombre: ${element.name}`)
        console.log(`--------------------`)
    });
}

const fallo = status => {
    console.log(status)
}


//funcion para conectar a una API publica
const get_data = (endpoint , exito , fallo) => {
    //1. crear el objeto de conexion
    const h = new http()
    //2. abrir conexion a API
    h.open('GET' , endpoint)
    //3. enviar la request definida
    h.send()
    //4. una vez reciibida la response,
    //  tratar la informacion 
    h.onload = () => {
     if (h.status=== 200){
        exito(h.responseText)
    }else{
        fallo(h.status)
    }

    }
}

 //invocar get_data
 get_data(url, exito , fallo)