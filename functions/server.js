// server.js

exports.handler = async (event, context) => {
    // Your serverless function logic here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from the serverless function!" }),
    };
  };
  