const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error{
    constructor(error) {
        let errorName = error.name;
        let explanation = [];

        error.errors.forEach((err) => {
            explanation.push(err.message);
        })
        super(
            errorName,
            explanation,
            'PLease check the request sent in the body',
            StatusCodes.BAD_REQUEST
        );
       

    }
}

module.exports = ServiceError;