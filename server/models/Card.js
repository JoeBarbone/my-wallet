const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const cardSchema = new Schema(
  {
    cardTitle: {
      type: String,
      required: "Please enter a card title"
    },
    cardIssuer: {
      type: String,
      required: 'Please enter a card issuer'
    },
    cardType: {
      type: String,
      required: "Please enter a card type",
    },
    cardNumber: {
      type: String,
      maxlength: 4,
      required: "Please enter last four characters of card number"
    },
    contactPhone: {
      type: String,
      required: "Please enter contact phone number"
    },
    email: {
      type: String,
      required: "Please enter email address"
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  }
);


// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

const Card = model('Card', cardSchema);

module.exports = Card;
