const mongoose = require('mongoose');

await mongoose.connect('mongodb://localhost/movies_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

module.exports = mongoose;