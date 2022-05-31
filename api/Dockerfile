
# //* LAYER CACHING : We have the ability to cache an image layer, so that the next time we build it, we can skip the steps
# //* SO, we are gonna be adding a command to copy the package.json file first and do npm i so that we have node modules ready in cache.

# //* Next time we can change stuffs in App.js and we wont have to run npm i everytime, because that's weird. 

# //* So once we made changes to APP.JS we can simply make a new image by docker build
# //* And then use the new image to run our app in a new container.


# //^ DOCKER REMOVE IMAGES : we can remove the images we don't need anymore.
# //^ to remove images we just say : docker image rm imagename -f  <-- this will remove the image and the container.

# //& DOCKER REMOVE CONTAINER : we can remove the container we don't need anymore.
# //& to remove container we just say : docker container rm container_name -f  <-- this will remove the container.

FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node", "app.js" ]


