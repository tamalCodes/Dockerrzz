#//* Volumes are used to mount directories or files from the host into the container so that whenever there are changes in the host, the changes are reflected in the container too.

#//* volumes are specified in the Dockerfile using the VOLUME command.

#//* But let us remember that images doesnot changes in volume !! So, if you want to change the volume, you have to create a new image.

#//* So `docker run --name cont-1 -p 4000:4000 -v D:\Github-files\Dockerrzz\api:/app -v /app/node_modules  img-1 ` gives us a new container named CONT-1 which 
#//* uses image IMG-1 and also uses VOLUME from D:\Github-files\Dockerrzz\api to the container along with node_modules.

FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "dev" ]