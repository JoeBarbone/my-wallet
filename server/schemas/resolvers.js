const { AuthenticationError } = require("apollo-server-express");
const { User, Card } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {

      me: async (parent, args, context) => {

        if (context.user) {
          const userData = await User.findOne({ email: context.user.email })
            .select("-__v -password")
            .populate("cards");

          return userData;
      
        } else {
      
        throw new AuthenticationError("Not logged in!");
      }
      
      },



      users: async (parent, { email }) => {

        const params = email ? { email } : {};
        return User.find(params)
          .populate({path:"cards"})
          .sort({ lastName: -1 });
          
      },

      cards: async () => {

        // const params = email ? { email } : {};
        return Card.find().sort({ cardTitle: -1 });

      },

      card: async (parent, { email }) => {

        return await Card.find( { "email": email } );

      }

    },


    Mutation: {

      addUser: async (parent, args) => {

        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };

      },

      login: async (parent, { email, password }) => {

        const user = await User.findOne({ email });

        if (!user) {

          throw new AuthenticationError("Incorrect credentials");
        
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {

          throw new AuthenticationError("Incorrect credentials");

        }

        // JWT not working for some reason. These have been commented out
        const token = signToken(user);
        return { token, user };

        // return user;

      },

      addCard: async (parent, { email, cardTitle, cardIssuer, cardType, cardNumber, contactPhone }) => {
      // addCard: async (parent, a/rgs) => {

        const card = await Card.create({
        
          email,  
          cardTitle,
          cardIssuer,
          cardType,
          cardNumber,
          contactPhone
        
        });
        
        console.log(card);
        
        // User.findOneAndUpdate({email: args.email}, {$push: {"cards": card._id}}, {new: true} ).then(() => {
        User.findOneAndUpdate({email: email}, {$push: {"cards": card._id}}, {new: true} ).then(() => {

          return card;
        });

      },


      updateCard: async (parent, args) => {
          
          Card.findOneAndUpdate({_id: args._id}, {...args} ).then((card) => {
  
            return card;

          });
  
      },

      deleteCard: async (parent, args) => {

        Card.findOneAndDelete({_id: args._id}, {...args} ).then((card) => {
  
          return card;

        });

      }
        
    }

    
  };
  
  module.exports = resolvers;