const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;
// console.log("Secret Key:", secret); // Log the value of secret to ensure it's set
const expiration = process.env.EXPIRATION;

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate club.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.club = data;
    } catch (error) {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ club, _id }) {
    const payload = { club, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
