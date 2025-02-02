const {cityService} =  require('../services/city-service')

const cityService = new cityService;

const create = async (req, res) => {
    try {
        const city = cityService.createCity(req.body);
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
        
    } catch (error) {
        
    }
}

const update = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const destroy = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}