const express = require('express');

const PORT = 3001;

const app = express();

app.use('/jobs', require('./routes/jobs'));

app.listen(PORT, () => {
    console.log(`Listen port: ${PORT}`);
});