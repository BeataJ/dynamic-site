const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let mongodgUrl = 'mongodb://10.0.0.16:27017';

if(process.env.MONGODB_URL) {
  mongodgUrl = process.env.MONGODB_URL;
}

let database;

async function initDatabase() {
  const client = await MongoClient.connect(mongodgUrl);
  database = client.db('deployment');
}

function getDb() {
  if (!database) {
    throw new Error('No database connected!');
  }

  return database;
}

module.exports = {
  initDatabase: initDatabase,
  getDb: getDb,
};
