const express = require('express');
const product = require('./product');
const user = require('./user');
const path = require('path');
const database = require('./middleware/database')
const cors = require('cors');


// Express server
const expressServer = express();
expressServer.use(express.static(path.resolve(__dirname, '../client')));
expressServer.use(express.json());
expressServer.use(cors());

// Skab kontakt til database. Vi benytter "connect" metoden i vores database fil og skaber kontakt til vores database.
database.connect();

// Client Forside
expressServer.get('/', (req, res) => {

  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// Server Endpoints (CREATE)
expressServer.post('/user', (req, res) => {

    user.create(req.body, (code, returnObj) => {

    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.status(code);
    res.send(returnObj);
  });
});

// Server Endpoints (READ)
expressServer.get('/user', (req, res) => {

  user.read((code, returnObj) => {

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(code);
    res.send(returnObj);
  });
});

// Server Endpoints (UPDATE)
expressServer.put('/user', (req, res) => {

  user.update(req.body, (code, returnObj) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(code);
    res.send(returnObj);
  });
});

// Server Endpoints (DELETE)
expressServer.delete('/user', (req, res) => {

  user.delete(req.body, (code, returnObj) => {

    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.status(code);
    res.send(returnObj);
  });

});

//* Server Endpoints PRODUCTS

// Server Endpoints (CREATE)
expressServer.post('/product', (req, res) => {

  product.create(req.body, (code, returnObj) => {

  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.status(code);
  res.send(returnObj);
});
});

// Server Endpoints (READ)
expressServer.get('/product', (req, res) => {

  product.read((code, returnObj) => {

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(code);
  res.send(returnObj);
});
});

// Server Endpoints (UPDATE)
expressServer.put('/product', (req, res) => {

  product.update(req.body, (code, returnObj) => {

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(code);
  res.send(returnObj);
});
});

// Server Endpoints (DELETE)
expressServer.delete('/product', (req, res) => {

  product.delete(req.body, (code, returnObj) => {

  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.status(code);
  res.send(returnObj);
});

});

const server = {};

server.run = () => {

  // Opretter en variable der holder på vores port nummer.
  const port = 3000;
  console.log('Run Server');

  // Express Event der lytter på alle 'requests`
  expressServer.listen(port, () => {

    console.log(`Serveren lytter på port http://localhost:${port}`);
  });
};

module.exports = server;
