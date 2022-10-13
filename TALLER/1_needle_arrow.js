const needle = require('needle')

const url = "https://date.nager.at/api/v3/publicholidays/2017/AT"


const f = async () => {
    try {
        let response = await needle('get' , url)
        const tipos = response.body
        tipos.forEach((element) => {
            console.log(element.name)
            console.log('************************')
        })
    } catch (error) {
        
    }
    
}
f()