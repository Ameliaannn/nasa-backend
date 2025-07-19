const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const nasaRouter = require('./routes/nasaRouter');
const marsRouter = require('./routes/marsRouter');
const epicRouter = require('./routes/epicRouter');
const asteroidRouter = require('./routes/asteroidRouter');
const top10Route = require('./routes/top10');


app.use('/api/nasa', nasaRouter);
app.use('/api/mars', marsRouter);
app.use('/api/epic', epicRouter);

app.use('/api/asteroids', asteroidRouter);
app.use('/api/asteroids/top10', top10Route);

app.listen(5000, () => {
    console.log('🚀 Server running at http://localhost:5000');
});


require('./cronjob');