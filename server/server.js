const path = require('path')
const express = require('express')

const app = express()
const PORT = env.port || 3000

const publicPath = path.join( __dirname, '..', 'public')

app.use(express.static( publicPath ))

app.listen( PORT, () => console.log('Server running'))