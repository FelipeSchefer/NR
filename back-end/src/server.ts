import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'

const path = require('path')
const adminRouter = require('./routes/AdminRoute')

const app = express()     
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(adminRouter)


const server = http.createServer(app)
server.listen('3001', (): void =>{
 console.log("Server running!")
})