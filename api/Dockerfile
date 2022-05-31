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