// split the app from server start up for ease of testing 
// (no need to start the server when testing)

// packages
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// our packages
import {logger} from './util';

// init app
const app = express();

// setup logging (since console.log is unreliable in deployment)
app.use(morgan('combined', {stream: logger.stream}));

// add body parsing
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded

// test method
app.get('/', (req,res) => {
	res.send('Hello World!');
});

// catch all unhandler errors
app.use((req, res, err) => {
	logger.error(err.stack);
	res.status(500).send(err);
});

// export app
export default app;
