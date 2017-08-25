const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = 'postgres://postgres:password@localhost/Shelfie';
const products_controller = require('./binCtrl');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( connectionString ).then(
	
	dbInstance => {
	console.log("im connected");
	app.set('db', dbInstance) 
    });
    
app.get( '/api/:shelfId/bins', products_controller.getAll );
app.get( '/api/bin/:id', products_controller.getOne );
app.put( '/api/bin/:id', products_controller.update );


const port = 3030;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );