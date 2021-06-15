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
    return MoviesCollection.findById(dataId)
};

const addData = (dataId) => {
    return MoviesCollection.create(dataId)
};

const updateData = (dataId, updateData) => {
    return MoviesCollection.findByIdAndUpdate(dataId, updateData)
};

const deleteData = (dataId) => {
    return MoviesCollection.deleteOne({_id: dataId})
};

module.export = {
    grabAllData,
    grabSingleData,
    addData,
    updateData,
    deleteData
};
