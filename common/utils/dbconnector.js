const { connect } = require("mongoose");

const opts = {
  retryWrites: true,
};

const connectDB = async (url, options = opts) => {
  try {
    await connect(url, options);
    console.log("*\tDatabase: MongoDB");
    console.log("*\tDB Connection: OK");
    console.log("****************************");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDB,
};
