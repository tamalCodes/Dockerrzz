### Build a new image

`docker build --tag react .`

### Run the container !

`docker run --name react_container --publish 3000:3000 react`

### Build using Docker compose

`docker-compose build`

### Start and run the entire app

`docker-compose up`

#### PS :

You can update the files and they will still get updated right there. Donot worry about it !

### Brief :

- Make Dockerfile
- Write about stuffs in Dockerfile step by step
- Next is building an image
- Next run a container with that same image which you made along with a port.
- But the run command can get pretty long sometimes TBH so the best thing to do is to make `docker-compose.yml` file
- Inside of it you write up stuffs along with your `.env` files and all after that you run `docker-compose up`
- That will basically make a container, spin up the app, and as well as make it dynamic.
- But anytime you make changes to the Dockerfile you need to run `docker-compose up --build` so that a new image is made.
