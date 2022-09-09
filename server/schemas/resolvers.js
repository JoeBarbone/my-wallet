const { User } = require("../models");

const resolvers = {
    Query: {

      users: async (parent, { email }) => {

        const params = email ? { email } : {};
        return User.find(params).sort({ lastName: -1 });

      }
    }
  };
  
  module.exports = resolvers;