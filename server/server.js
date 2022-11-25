const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('be_greatfull');
    const bgsCollection = db.collection('bgs');
    const bgsRouter = createRouter(bgsCollection);
    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
    app.use('/api/bgs', bgsRouter);
    app.use('/api/users', usersRouter);

  })
  .catch(console.error);

app.listen(9000, function() {
  console.log(`Be Greatfull server running on port ${this.address().port}`);
});