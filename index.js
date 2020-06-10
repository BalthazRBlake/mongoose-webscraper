const mongoose = require("mongoose");
const connectionString = "mongodb+srv://mongo-1st:MongoDB-1st@fhhf-db-idwho.mongodb.net/db_test?retryWrites=true&w=majority";

mongoose.connect(connectionString, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

