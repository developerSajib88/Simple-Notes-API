const responseService = {
    statusCodes: {
      ok: 200,
      created: 201,
      accepted: 202,
      noContent: 204,
      badRequest: 400,
      unauthorized: 401,
      forbidden: 403,
      notFound: 404,
      internalServerError: 500,
      serviceUnavailable: 503,
    },
  
    /**
     * Success response
     * @param {Object} res - Express response object
     * @param {string} message - Success message
     * @param {Object} [data=null] - Response data
     * @param {number} [status=200] - HTTP status code
     */
    success({res, message, data = null, status = 200} ) {
      return res.status(status).json({
        status,
        success: true,
        message,
        data,
      });
    },
  
    /**
     * Error response
     * @param {Object} res - Express response object
     * @param {string} message - Error message
     * @param {any} [error=null] - Error details
     * @param {number} [status=400] - HTTP status code
     */
    error({ res, message, error = null, status = 400 }) {
      console.error(`❌ Error: ${message}`, error); // Log errors for debugging
      return res.status(status).json({
        status,
        success: false,
        message,
        error,
      });
    },
  
    unauthorizedError({ res, message = "Unauthorized" }) {
      return this.error({ res, message, error: "Unauthorized", status: this.statusCodes.unauthorized });
    },
  
    forbiddenError({ res, message = "Forbidden", error }) {
      return this.error({ res, message, error: error, status: this.statusCodes.forbidden });
    },
  
    notFoundError({ res, message = "Not Found",error}) {
      return this.error({ res, message, error: error, status: this.statusCodes.notFound });
    },
  
    internalServerError({ res, message = "Internal Server Error", error}) {
      return this.error({ res, message, error: error, status: this.statusCodes.internalServerError });
    },
  
    serviceUnavailableError({ res, message = "Service Unavailable", error }) {
      return this.error({ res, message, error: error, status: this.statusCodes.serviceUnavailable });
    },
  };
  
  module.exports = responseService;
  