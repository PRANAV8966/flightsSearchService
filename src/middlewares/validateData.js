const { StatusCodes } = require("http-status-codes");


const compareData = async (req, res, next) => {
    if (!req.body.flightNumber || 
        !req.body.airplaneID || 
        !req.body.departureAirportId || 
        !req.body.arrivalAirportId || 
        !req.body.departureTime || 
        !req.body.arrivalTime || 
        !req.body.price) {
            function missingItem(req) {
                let key =[];
                Object.values(req).forEach((value, index) => {
                    if (value=='' || value ==null || value ==false || value==undefined) {
                        key.push(Object.keys(req)[index]);    
                    }
                });
                return key;
            }
            let MissingItem = [];
            MissingItem.push(missingItem(req.body));
            return res.status(StatusCodes.BAD_REQUEST).json({
                data:`missing  field`,
                success:false,
                message:'incomplete set of data cannot be processed',
                error: {}
            });
        }
    
    next();
}

const isValidPrice = async (req, res, next) => {
    if (req.body.price <= 0 ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:'please check the entered price and try again',
            error:{}
        });
    }
    next();
}

module.exports = {
    compareData,
    isValidPrice
}