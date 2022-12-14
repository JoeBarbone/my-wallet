const jwt = require('jsonwebtoken');

const secret = 'mysecretpassphrase';
const expiration = '2h';

module.exports = {

  authMiddleware: function({ req }) {

    // allow token to be sent via req.body, req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // separate "Bearer" from token value
    if (req.headers.authorization) {

      token = token
        .split(" ")
        .pop()
        .trim();

    }

    // if no token, return request object as is
    if (!token) {

      return req;

    }

    try {

      //decide and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
    } catch {

      console.log("Invalid Token");

    }

    // return updated request object
    return req;

  },


  signToken: function({ email, _id }) {
    const payload = { email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }

};