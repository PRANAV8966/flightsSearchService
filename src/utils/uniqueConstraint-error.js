const { StatusCodes } = require('http-status-codes');

class UniqueConstraintError extends Error {
    constructor(error) {
        let errExplanation =[];
        error.errors.forEach((err) => {
            errExplanation.push(err.message);
        })
        let statusCode = StatusCodes.BAD_REQUEST;
        super();
        this.name = error.name;
        this.explanation = errExplanation;
        this.message = error.message;
        this.statusCode = statusCode;
    }
}

module.exports = UniqueConstraintError;