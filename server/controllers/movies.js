const express = require('express')
const moviesApi = require('../models/movies.js')
const moviesRouter = express.Router()

moviesRouter.get('/', (req, res) => {
    moviesApi.grabAllData()
        .then((allData) => {
            res.json(allData)
        })
});

moviesRouter.post('/', (req, res) => {
    moviesApi.addData(req.body)
        .then((data) => {
            res.json({data})
        })
})

moviesRouter.get('/:dataId', (req, res) => {
    moviesApi.grabSingleData(req.params.dataId)
        .then((data) => {
            res.json(data)
        })
});

moviesRouter.put('/:dataId', (req, res) => {
    moviesApi.updateData(req.params.dataId, req.body)
        .then(() => {
            res.json({})
        })
});

moviesRouter.delete('/:dataId', (req, res) => {
    moviesApi.deleteData(req.params.dataId)
        .then(() => {
            res.json({})
        })
});

module.exports = {
    moviesRouter
};