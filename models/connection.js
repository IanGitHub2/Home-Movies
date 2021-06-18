const mongoose = require('mongoose');

async function start() {
  await mongoose.connect('mongodb://localhost/movies_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
}start();

module.exports = mongoose;