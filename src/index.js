const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig.js');
const ApiRoutes = require('./routes/index');

const {Airport, city} = require('./models/index.js');
const db = require('./models/index.js')
const {Op} = require('sequelize');

const startFlightServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
            console.log(`server started at ${PORT}`);

            // const airports = await Airport.findAll({
            //     include: [{
            //         model:city
            //     }]
            // });
            // console.log(airports);
        // db.sequelize.sync({alter:true});
            //  const cities = await city.findOne({where:{id:29}});
            // //  console.log(cities);
            // // const airports = await Airport.findAll({where: { cityId : cities.id}});
            // // console.log(airports);

            // const airports = await cities.getAirports();
            // await cities.addAirport({
            //     name: "Nagpur airport final",
            //     createAt: new Date(),
            //     updatedAt: new Date()
            // })
            // console.log(airports);
    })
}
startFlightServer();