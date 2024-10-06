import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const App = express()

App.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true
}))
App.use(express.json({limit:'16kb'}))
App.use(express.urlencoded({
    extended:true,
    limit:'16kb'
}))
App.use(express.static("public"))
App.use(cookieParser())

export {App}