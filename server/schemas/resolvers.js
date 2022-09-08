const { User, Card } = require("../models");

const resolvers = {
    Query: {

      users: async (parent, { email }) => {

        const params = email ? { email } : {};
        return User.find(params).sort({ lastName: -1 });

      },

      cards: async (parent, { email }) => {

        const params = email ? { email } : {};
        return Card.find(params).sort({ cardTitle: -1 });

      }
    }
  };
  
  module.exports = resolvers;