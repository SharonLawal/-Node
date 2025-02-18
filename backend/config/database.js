/*
  This code connects to a MongoDB database using Mongoose. It fetches the MongoDB URI 
  from environment variables and attempts to connect to the database specified in the URI. 
  If the connection is successful, a message is logged to the console; if there's an error, 
  it logs the error message. The connection timeout is set to 20 seconds.

  The code uses the Mongoose library to manage MongoDB connections and queries.
*/

const mongoose = require('mongoose'); // Import Mongoose to interact with MongoDB

// Connect to MongoDB using the URI specified in environment variables
mongoose.connect(process.env.MONGO_URI + 'Node', {  // Append 'Node' to the MONGO_URI from environment variables
  // useNewUrlParser: true,  // Uncomment if needed to use the new URL parser for MongoDB connections
  // useUnifiedTopology: true,  // Uncomment to use the unified topology for MongoDB driver
  serverSelectionTimeoutMS: 20000, // Set a timeout of 20 seconds for selecting the server
})
.then(() => console.log('MongoDB connected')) // If the connection is successful, log this message
.catch((err) => console.log('MongoDB connection error: ', err)); // If there's an error, log the error message
