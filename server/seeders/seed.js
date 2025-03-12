const db = require('../config/connection');
const { Club } = require('../models');
const clubSeeds = require('./clubSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Club', 'club');
    
    await Club.create(clubSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
