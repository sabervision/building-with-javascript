// our packages
import app from './app';

// start server
app.listen(8080, function() {
	const host = this.address().address;
	const port = this.address().port;
	console.log(`Shard listening at http://${host}:${port}`);
});

// output all uncaught exceptions
process.on('uncaughtException', err => console.error('uncaugh exception:', err));
process.on('unhandleRejection', error => console.error('unhandled rejection:', error));