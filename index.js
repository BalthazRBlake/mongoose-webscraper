const mongoose = require("mongoose");
const connectionString = "mongodb+srv://mongo-1st:MongoDB-1st@fhhf-db-idwho.mongodb.net/db_test?retryWrites=true&w=majority";

mongoose.connect(connectionString, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Persick" });

kitty
  .save()
  .then(cat => console.log(`Cat ${cat.name} has been saved`));  

Cat
  .find()
  .then(console.log);