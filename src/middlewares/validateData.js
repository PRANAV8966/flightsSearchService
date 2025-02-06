const compareData = async (req, res, next) => {
    if (!req.body.flightNumber || 
        !req.body.airplaneID || 
        !req.body.departureAirportId || 
        !req.body.arrivalAirportId || 
        !req.body.departureTime || 
        !req.body.arrivalTime || 
        !req.body.price) {
            return res.status(400).json({
                data:{},
                success:false,
                message:'incomplete set of data cannot be processed',
                error: {}
            })
        }
    next();
}

module.exports = {
    compareData
}