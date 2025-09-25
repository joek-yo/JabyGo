// backend/src/Server.ts

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { logger } from './utils/logger'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/jabygo'

app.use(cors())
app.use(helmet())
app.use(express.json())

// Root route
app.get('/', (_req, res) => {
  res.send('🚀 JabyGo Backend is Running!')
})

// Health check route
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// Connect DB + start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    logger.info('✅ MongoDB connected successfully')
    app.listen(PORT, () => {
      logger.info(`🚀 Server running on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    logger.error('❌ MongoDB connection error:', err)
  })
