const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig.js');
const ApiRoutes = require('./routes/index');

const {Airport, city} = require('./models/index.js');
const db = require('./models/index.js')

const startFlightServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
            if (process.env.DB_sync == true) {
                db.sequelize.sync({alter : true});
            }
            console.log(`server started at ${PORT}`);

    })
}
startFlightServer();