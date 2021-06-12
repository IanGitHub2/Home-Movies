const mongoose = require('./connection.js')
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    like: String,
})

const MoviesCollection = mongoose.model('Movie', MoviesSchema);
