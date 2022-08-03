var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var MongoClient = require("mongodb").MongoClient;
let bodyParser = require("body-parser");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/profile-picture", function (req, res) {
  var img = fs.readFileSync("./images/profile-1.jpg");
  res.writeHead(200, { "Content-Type": "image/jpg" });
  res.end(img, "binary");
});

// use when starting application locally
let mongoUrlLocal = "mongodb://admin:admin@localhost:27017";

// use when starting application as docker container
let mongoUrlDocker = "mongodb://admin:admin@mongodb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "my-db";

//* UPDATE

app.post("/update-profile", function (req, res) {
  let userObj = req.body;

  console.log("Connecting to the DB...");

  MongoClient.connect(
    mongoUrlLocal,
    mongoClientOptions,
    function (err, client) {
      if (err) throw err;

      let db = client.db(databaseName);
      userObj["userid"] = 1;

      let myquery = { userid: 1 };
      let newvalues = { $set: userObj };

      console.log("Sucessfully connected to the DB...");

      db.collection("users").updateOne(
        myquery,
        newvalues,
        { upsert: true },
        function (err, res) {
          if (err) throw err;
          client.close();
        }
      );
    }
  );
  // Send response
  res.send(userObj);
});

//* GET

app.get("/get-profile", function (req, res) {
  let response = {};
  // Connect to the db
  MongoClient.connect(
    mongoUrlLocal,
    mongoClientOptions,
    function (err, client) {
      if (err) throw err;

      let db = client.db("user-account");

      let myquery = { userid: 1 };

      db.collection("users").findOne(myquery, function (err, result) {
        if (err) throw err;
        response = result;
        client.close();

        // Send response
        res.send(response ? response : {});
      });
    }
  );
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
