const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const bucketRoutes = require('./routes/bucketList');
app.use('/api/bucketlist', bucketRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/bucketlist')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));