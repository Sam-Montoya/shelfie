const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = 'postgres://postgres:@localhost/shelfie';
const binController = require('./binCtrl');

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(connectionString).then(
	DB => {
		console.log("Connected to the Database.");
		app.set('DB', DB)
		app.get('DB').init.seed_file();
	})

app.get('/api/:shelfId/bins', binController.getBins);
app.get('/api/bin/:id', binController.getOneBin);
app.put('/api/bin/:id', binController.updateBin);


const port = 3030;
app.listen(port, () => { console.log(`Server listening on port ${port}.`); });