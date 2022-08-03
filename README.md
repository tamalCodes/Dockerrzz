# A basic dockerized app

`index.html` contains the Frontend

`server.js` as the backend.

# Docker network

Docker creates a isolated networks and containers init can basically talk to each other without anything else !!

`docker network create mongo-network` to create a network named `mongo-network`

We need to specify the network option when we are using `run` to make a container !!

`docker run --name mongo-cont -p 4000:4000 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin --net mongo-network mongo`

We did the same for both the containers `mongo_cont` and `mongo_express_cont`

# Connecting

We start `mongo_express_cont` and then we create a new database `user-account` and now we have to connect it !!
