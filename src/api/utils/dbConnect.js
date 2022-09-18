const mongoose = require("mongoose");

const uri =
  "mongodb+srv://hima123:7ROz0jGV7E7ToTHV@cluster0.qmwm5.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected Database Successfully");
});
