const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //for the devs
        const db = await mongoose.connect("mongodb://localhost:27017/pebinha", {
            // for the docker production
            // const db = await mongoose.connect("mongodb://mongo:27017/LEADS", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true,
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
