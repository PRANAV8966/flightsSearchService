const { AirplaneService } = require('../services/index');
const { StatusCodes } = require('http-status-codes');

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const airplane = await airplaneService.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            data:airplane,
            success: true,
            message: "SUCCESSFULLY CFREATED AIRPLANE",
            error:{}
        })
    } catch (error) {
        throw error;
    }
}

const getAirplane = async (req, res) => {
    try {
        const airplane = await airplaneService.get(req.params.id);
        return res.status(StatusCodes.CREATED).json({
        data: airplane,
        success: true,
        message : 'successfully fetched airplane',
        error: {}
    });
    } catch (error) {
        throw error;
    }
}

const getAirplanes = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAll();
        return res.status(StatusCodes.CREATED).json({
        data: airplanes,
        success: true,
        message : 'successfully fetched airplanes',
        error: {}
    });
    } catch (error) {
        throw error;
    }
}

const update = async (req, res) => {
    try {
        await airplaneService.update(airplaneId, data);
        return res.status(StatusCodes.NO_CONTENT).json({
            success:true,
            message: 'successfully updated the airplane',
            error:{}
        });
    } catch (error) {
        throw error;
    }
}

const Delete = async (req, res) => {
    try {
        await airplaneService.delete(req.params.id);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            message: 'successfully deleted airplane',
            error:{}
        })
    } catch (error) {
        console.log('error from airplane controller', error);
        throw error;
    }
}


module.exports = {
    create,
    getAirplane,
    getAirplanes,
    Delete,
    update
}