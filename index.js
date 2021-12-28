require('dotenv').config({
  path: './config/config.env'
});
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes')
const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: process.env.CLIENT_URL
  }))
  app.use(morgan('dev'))
}
app.use(cors())
app.use(express.json())

// Routes
app.use('/api', router)

const PORT = process.env.PORT || 3000;

async function connectDB() {
  try {
    const url = process.env.DB_URL;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    app.listen(PORT, () => {
      console.log(`Сервер іске қосылды: порт! ${PORT}`);
    });
  } catch (err) {
    console.log(err)
  }
}

connectDB();