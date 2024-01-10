// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const router = require('./src/routes/cars') 
const mongoURI = process.env.MONGODB_URI;



const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
// using .env
//const mongoURI = 'mongodb+srv://kpatel114:R7tvHnASCDmCJToZ@carcollection.chb2apw.mongodb.net/CarCollection?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Once the connection is open, log a success message
db.once('open', () => {
  console.log('Connected to MongoDB successfully');

  // Define your routes and other server logic here
  app.use('/', router)
  app.get('/dashboard', router)

  // get all the cars


  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});



//////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const router = express.Router();
// const Car = require('../models/Car')



// const token = 'c595c89d2997cd95852ed7df2eeb70327a97d99488f7b330';

// export const server_calls = {
//     get: async () => {
//         const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
//     {
//         method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//                 'x-access-token': `Bearer ${token}`
//             }
//     });
//     if (!response.ok){
//         throw new Error('Failed to fetch data from the server')
//     }

//     return await response.json()
// },
// create: async (data: any = {}) => {
//     const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
//     {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'x-access-token': `Bearer ${token}`
//         },
//         body: JSON.stringify(data)

//     })

//     if (!response.ok) {
//         throw new Error('Failed to create new data on the server')
//     }

//     return await response.json()
// },

//     update: async (id: string, data:any = {}) => {
//     const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,
//     {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'x-access-token': `Bearer ${token}`
//         },
//         body: JSON.stringify(data)

//     })

//     if (!response.ok) {
//         throw new Error('Failed to update data on the server')
//     }

//     return await response.json()
// },

// delete: async (id: string) => {
//     const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,
//     {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'x-access-token': `Bearer ${token}`
//         },

//     })

//     if (!response.ok) {
//         throw new Error('Failed to delete data from the server')
//     }

//     return;
// }
// }