## SADOSA docker-react-graphql-express-mongodb

* [GraphQL Server Tutorial with Apollo Server and Express](https://github.com/the-road-to-graphql/fullstack-apollo-express-mongodb-boilerplate)

## Requirements 

You should have docker and docker-compose installed on your machine.

## Installation 

* Clone the project from the repo,
* build your project using

 ```
 $ docker-compose build
 ```
* and/or run the following command directly inside the directory

 ```
 $ docker-compose up -d
 ```
 Your project will run in the browser as

* API as NodeJS project with GraphQL at 
  + http://localhost:3000/graphql
 
Connect to database inside mongodb container

 ```
$ mongo "mongodb://root:root_password@127.0.0.1:27017/mydatabase?authSource=admin"
 ```
 
Finally it builds and starts up all docker images.
