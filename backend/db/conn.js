const mongoose = require("mongoose");
const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(err));
