// const faker = require('faker');
const userSeeds = require('./userSeed.json');
const cardSeeds = require('./cardSeed.json');
const db = require('../config/connection');
const { Card, User } = require('../models');

db.once('open', async () => {
  try {
    
    await Card.deleteMany({});
    await User.deleteMany({});

    // const users = await User.create(userSeeds);
    // const cards = await Card.create(cardSeeds);

    await User.create(userSeeds);
    await Card.create(cardSeeds);


    // await User.find().then(users => {

    //   users.forEach(async (user) => {


    //     await User.findByIdAndUpdate({email: user.email}, { $push:{"cards": cardSeeds} }, {new: true} );
    //     cardSeeds.forEach(async card => {
    //       const tempCard = cards[i]
    //       tempCard.push(card.email);
    //       await user.save();
        
    //     })
        

    //   })

    // })

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});