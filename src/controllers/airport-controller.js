const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const data = await airportService.create(req.body);
        return res.status(200).json({
            data: data,
            success: true,
            message: "Sucessfully created the data",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "failed to create the data",
            error: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const data = await airportService.getAll();
        return res.status(200).json({
            data: data,
            success: true,
            message: "Sucessfully fetched the data",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "failed to fetch the data in controller",
            error: error
        })
    }
}

const get = async (req, res) => {
    try {
        const data = await airportService.get(req.query);
        return res.status(200).json({
            data: data,
            success: true,
            message: "Sucessfully fetched the data",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "failed to fetch the data",
            error: error
        })
    }
}

const update = async (req, res) => {
    try {
        const data = await airportService.update(req.params.id, req.body);
        return res.status(200).json({
            data: data,
            success: true,
            message: "Sucessfully updated the data",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "failed to update the data",
            error: error
        })
    }
}

const Delete = async (req, res) => {
    try {
        const response = await airportService.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Sucessfully deleted the data",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "failed to delete the data",
            error: error
        })
    }
}

module.exports = {
    create,
    getAll,
    get,
    update,
    Delete
}