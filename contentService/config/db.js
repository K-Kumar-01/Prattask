const mongoose = require("mongoose");
// const db= "mongodb://Nandini:snehan123@cluster0-shard-00-00.zcjhr.mongodb.net:27017,cluster0-shard-00-01.zcjhr.mongodb.net:27017,cluster0-shard-00-02.zcjhr.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-2psiw4-shard-0&authSource=admin&retryWrites=true&w=majority";
const db = "mongodb://localhost:27017/pratilipi";
const options = {
  retryWrites: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(db, options);
    console.log("*\tDatabase: MongoDB");
    console.log("*\tDB Connection: OK");
    console.log("****************************");
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = connectDB;
