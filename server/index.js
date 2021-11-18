const express = require('express')();

express.get('/', (req, res) => {
    res.send('Hello from initialization of the server site');
})

express.listen(3000, () => console.log('Server listening on port 3000'));