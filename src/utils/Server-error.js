const { StatusCodes } = require('http-status-codes');

class ServerError  {
    constructor(
        name = 'INTERNAL_SERVER_ERROR',
        explanation = 'Something went wrong',
        message = 'some issue found',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        this.name = name;
        this.explanation = explanation;
        this.message = message;
        this.statusCode = statusCode;

    }
}

module.exports = ServerError;