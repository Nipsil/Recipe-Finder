const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Backend Server is Running!');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

