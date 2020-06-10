const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Persick" });

/*
kitty
  .save()
  .then(cat => console.log(`Cat ${cat.name} has been saved`));  
*/
Cat
  .find()
  .then(console.log);