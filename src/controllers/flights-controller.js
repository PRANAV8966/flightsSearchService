const {FlightService} = require('../services/index');

const { validateTime } = require('../utils/helper');

const flightService = new FlightService();


const create = async (req, res) => {
    try {
        if (!validateTime(req.body.arrivalTime, req.body.departureTime)) {
            throw {error:"arrival timecannnot be less than departure time"};
        }
        console.log("we are going inside service layer");
        const flights = await flightService.createFlights(req.body);
        console.log("controller flights check!!", flights);
        return res.status(201).json({
            data:flights,
            success:true,
            message: 'successfully created flights',
            error:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to create flight at controller",
            error:error
        })
    }
}

const getFlight = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.body);
        return res.status(200).json({
            data:flight,
            success:true,
            message: 'successfully fetched flight',
            error:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to fetch flight at controller",
            error:error
    })}
}

const getAllFlights = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data:flights,
            success:true,
            message:'successfully fetched flights',
            error:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to fetch flight at controller",
            error:error
    })}
}


module.exports = {create,
    getFlight,
    getAllFlights
}