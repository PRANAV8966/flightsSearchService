const {cityService} =  require('../services/city-service')

const CityService = new cityService;

const create = async (req, res) => {
    try {
        const city = CityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message: "Sucessfully created a city",
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to create a city",
            error:error
        })
    }    
}

const getCity = async (req, res) => {
    try {
        const data = await CityService.getCity(req.params.id);
        return res.status(200).json({
            data:data,
            success:true,
            message: "Sucessfully fetched the city",
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to delete a city",
            error:error
        })
    }
}

const update = async (req, res) => {
    try {
        const data = await CityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data:data,
            success:true,
            message: "Sucessfully updated the city",
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to update the city",
            error:error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await CityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message: "Sucessfully deleted a city",
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"failed to delete a city",
            error:error
        })
    }
}