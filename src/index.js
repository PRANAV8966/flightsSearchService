const express = require('express');
const bodyParser = require('body-parser');
const cityRespository = require('./repository/cityRepository.js')

const {PORT} = require('./config/serverConfig.js');

const startFlightServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, async () => {
        try{
            console.log(`server started at ${PORT}`);
            const repo = new cityRespository();
            repo.createCity({name:"delhi"});
        } catch(error) {
            throw {error};
        }
    })
}
startFlightServer();