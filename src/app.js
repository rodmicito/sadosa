
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const mongoose=require('mongoose');

//const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

async function start(){
    // const apolloServer = new ApolloServer({
    //     typeDefs,
    //     resolvers,
    //   });
    //   await apolloServer.start();
    //   apolloServer.applyMiddleware({ app:app, path: "/" });
    // //app.use(require("./routes/index.js"));
    const app = express();

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    
    await server.start();
    // app.use('/',(req, res) => {
    //     res.send('Hello!');
    //   });    
    server.applyMiddleware({ app });
     
    app.use('*',(req, res, next) => {
        res.status(404).send("not found");
      });

    app.listen(3000,()=>{
        console.log('server corriendo en el puerto 3000');
    });
      
    mongoose.connect('mongodb://localhost:27017/Graphql',{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
    }).then(()=>{
      console.log('Database run');

    }).catch(err=>console.log(err));
}

start();