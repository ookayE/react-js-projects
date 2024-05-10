// Define an error handling middleware function
const errorHandler = (error, request, response, next) => {
  // Determine the status code to be sent in the response
  const statusCode = response.statusCode ? response.statusCode : 500;

  // Set the status code of the response
  response.status(statusCode);

  // Send a JSON response containing error details
  response.json({
    // Extract error message from the error object
    message: error.message,

    // Include error stack trace in development environment only
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};

// Export the errorHandler middleware function for use in other files
module.exports = errorHandler;
