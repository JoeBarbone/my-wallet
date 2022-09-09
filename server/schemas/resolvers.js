const { User, Card } = require("../models");

const resolvers = {
    Query: {

      users: async (parent, { email }) => {

        const params = email ? { email } : {};
        return User.find(params).sort({ lastName: -1 })
          .populate("cards");
          

      },

      cards: async () => {

        // const params = email ? { email } : {};
        return Card.find().sort({ cardTitle: -1 });

      },

      card: async (parent, { email }) => {

        return await Card.findOne( { "email": email } );
      }

    },


    Mutation: {

      addCard: async (parent, args) => {

        return User.findOneAndUpdate({email: args.email}, {$push: {"cards": args}}, {new: true} );

      }
    }
  };
  
  module.exports = resolvers;