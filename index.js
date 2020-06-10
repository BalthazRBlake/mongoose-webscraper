const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;

const html = axios.get("https://cnnespanol.cnn.com/")
  .then(data => {
    console.log(data);
  });

/*
mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
*/
