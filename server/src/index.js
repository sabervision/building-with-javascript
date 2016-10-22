// packages
import express from 'express';

// init app
const app = express();

// test method
app.get('/', (req,res) => {
	res.send('Hello World!');
});

// catch all unhandler errors
app.use((err, req, res) => {
	console.error(err.stack);
	res.status(500).send(err);
});

// start server
app.listen(8080, function() {
	const host = this.address().address;
	const port = this.address().port;
	console.log(`Shard listening at http://${host}:${port}`);
});

// output all uncaught exceptions
process.on('uncaughtException', err => console.error('uncaugh exception:', err));
process.on('unhandleRejection', error => console.error('unhandled rejection:', error));