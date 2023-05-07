const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello CI-CD V1 Setup 4!'))
app.listen(3000, () => console.log('Server ready'))
