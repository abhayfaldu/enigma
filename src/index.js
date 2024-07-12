const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.json({ message: 'Hello World, this is enigma!' })
})

app.listen(port, () => {
	console.log('server is listening on:', port)
})
