const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Argo CD Setup!'))
app.listen(3000, () => console.log('Server ready'))
