const axios = require('axios');

/*el cuerpo de esta función es más sencillo, solo 
es unap etición get,no hay que configurar headers*/

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=45b84094e25ea98df57078f349e41ff1&units=metric`)


    return resp.data.main.temp;
}

module.exports = {
    getClima
}