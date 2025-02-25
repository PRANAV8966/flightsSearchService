const {FlightService} = require('../services/index');

const { validateTime } = require('../utils/helper');

const flightService = new FlightService();


const create = async (req, res) => {
    try {
        if (!validateTime(req.body.arrivalTime, req.body.departureTime)) {
            throw {error:"arrival timecannnot be less than departure time"};
        }
        const sortedData = {
            flightNumber: req.body.flightNumber,
            airplaneID: req.body.airplaneID,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price
        }
        const flights = await flightService.createFlights(sortedData);
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
        const flight = await flightService.getFlight(req.params.id);
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

const updateFlight = async (req, res) => {
    try {
        const timeStamp = {
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime
        }
        const response = await flightService.updateFlight(req.params.id, timeStamp);
        return res.status(200).json({
            data:response,
            success:true,
            message:'successfully updated flights',
            error:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to update flight at controller",
            error:error
    })}
    
}

const deleteFlight = async (req, res) => {
    try {
        await flightService.deleteFlight(req.params.id);
        return res.status(401).json({
            response:true,
            success:true,
            message:'successfully deleted the flight',
            error:{}
        });
    } catch (error) {
        return res.status(500).json({
            response:false,
            success:false,
            mesage:'error while deleting the flight at controller',
            erorr:error
        });
    }
}


module.exports = {
    create,
    getFlight,
    getAllFlights,
    updateFlight,
    deleteFlight
}