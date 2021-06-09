import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import task1 from './data/task1.js'
import servers from './data/task2.js'
import levels from './data/task3.js'
// import task4 from './data/task4.js'

import customerRouter from './routes/custRoute.js'
import mapRouter from './routes/mapRoute.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/api/task1', (req, res) => {
  res.json(task1)
})

app.use('/api/task2/', customerRouter)

app.get('/api/task2/servers', (req, res) => {
  res.json(servers)
})

app.get('/api/task3/:level', (req, res) => {
  const level_id = req.params.level
  const level_data = levels.find((id) => id.level === level_id)
  res.json(level_data)
})

// app.get('/api/task4', (req, res) => {

//   res.json(task4)
// })
app.use('/api/task4', mapRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening in ${process.env.NODE_ENV} port ${PORT}!`)
})
