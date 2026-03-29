const mongoose = require('mongoose');
const fs = require('fs');
require('./app_server/models/travlr');

const Trip = mongoose.model('trips');
const dbURI = 'mongodb://127.0.0.1/travlr';

mongoose.connect(dbURI);

const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

mongoose.connection.on('connected', async () => {
  console.log('Mongoose connected for seeding');

  try {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log('Database seeded successfully');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});