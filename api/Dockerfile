# This is basically a set of instructions for building a docker image.
# The instructions are based on the instructions for building a docker image
# from the official documentation.

# here firstly we are using node version 17-alpine as the base image.
# it means node ver 17 and alpine distrubution of linux.

# for copy we are using . /app because we are copying the files from the current directory ,to a new folder in images called 
# "app" if all my code was in some other  directory then we would have to specify the path of the directory.
# COPY ./src /app   <-- LIKE THIS 

# amra ekhane WORKDIR e giye app bole akta folder define kore diyechi so that erpor jaa jaa hobe, shob jaano /app ei hoy

# we run npm i at build time to install all the dependencies.

# we then use CMD to specify the command to run when the image is running

FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "node", "app.js" ]


# //* DOCKER BUILD :  `docker build -t theimagename .` to build the image.
# theimagename is the name of the image we want to build.
# the . is the current directory.
# so we can use `docker build -t theimagename .` to build the image.

# //* DOCKER IMAGES : `docker images` to list all the images we have

# //* DOCKER RUN : `docker run --name cont-1 -p 4000:4000 img-1` to run the image and a container named as tamal-docker-app-2.

# //* DOCKER PROCESSES : `docker ps` to list all the processes running.

# //* DOCKER STOP CONTAINER : `docker stop tamal-docker-app-2` to stop the container.

# //* DOCKER START CONTAINER : `docker start tamal-docker-app-2` to start the container.
