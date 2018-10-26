const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const app = express();
const PORT = 4444;

// Schema
const Blog = require("./models/Blog");
const User = require("./models/User");
//Graphql Schema types
const typeDefs = gql`
    type Blog {
        title: String!
        author: String!
        body: String
        date: String
    }
    type User {
        username: String!
        password: String!
        email: String!
        date: String
    }
    type Query {
        showAllBlogs: [Blog]
        showAllUsers: [User]
    }
`;

const resolvers = {
    Query: () => {}
};

//mongoose
const mongoose = require("mongoose");
//dotenv variables
require("dotenv").config({ path: "variables.env" });

mongoose
    .connect(
        process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useCreateIndex: true
        }
    )
    .then(() => console.log("db connected"))
    .catch(err => console.error(err));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        Blog,
        User
    }
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4444${server.graphqlPath}`)
);

app.get("/", function(req, res) {
    res.send("Hello World");
});

// to run in terminal enter: nodemon app
