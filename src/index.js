const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

mongoose.connect(config.mongoose.url, config.mongoose.options)
    .then(() => {
        console.log("Connected to MongoDB");
        server = app.listen(config.port, () => {
            console.log(`App is running on port ${config.port}`);
        });
    })
    .catch((error)=>console.log("Failed to connect to db", error));
