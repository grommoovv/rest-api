require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/error.middleware')
const corsMiddleware = require('./middlewares/cors.middleware')
const cors = require('cors')

const NikeRouter = require('./routes/nike.router')
const AshleyRouter = require('./routes/ashley.router')

// Constants
const PORT = process.env.PORT || 5000
const CLIENT_URL = process.env.CLIENT_URL
const MONGO_URL = process.env.MONGO_URL
const MONGO_HOST = process.env.MONGO_HOST
const app = express()

// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(errorMiddleware)
app.use(corsMiddleware)
app.use(cors({ credentials: true, origin: CLIENT_URL }))

// Routes
app.use('/api/v1/products', NikeRouter)
app.use('/api/v1/products', AshleyRouter)

// Start
const start = async () => {
  try {
    // Подключение к дата базе
    await mongoose
      .connect(MONGO_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'projectG',
      })
      .then(() => console.log('Connected To MongoDB'))
      .catch((err) => console.log(`DB Connection Error: ${err}`))

    // Запуск сервера
    app.listen(PORT, () =>
      console.log(`Server started on http://localhost:${PORT}`)
    )
  } catch (e) {
    console.log(e)
  }
}

start()
