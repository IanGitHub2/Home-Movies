const mongoose = require('./connection.js');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    id: String,
    like: Boolean,
    watch: Boolean
});

const MoviesCollection = mongoose.model('Movie', MoviesSchema);

const grabAllData = () => {
    return MoviesCollection.find()
};

const grabSingleData = (dataId) => {
    return MoviesCollection.findOne({id: dataId})
};

const addData = (dataId) => {
    return MoviesCollection.create(dataId)
};

const updateData = (dataId, updateData) => {
    return MoviesCollection.findOneAndUpdate(dataId, updateData)
};

const deleteData = (dataId) => {
    return MoviesCollection.deleteOne({id: dataId})
};

module.exports = {
    grabAllData,
    grabSingleData,
    addData,
    updateData,
    deleteData
};
