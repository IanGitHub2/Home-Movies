const express = require('express')
const moviesApi = require('../models/movies.js')
const moviesRouter = express.Router()

moviesRouter.get('/', (req, res) => {
    moviesApi.grabAllData()
        .then((allData) => {
            res.json(allData)
        })
});

module.exports = {
    moviesRouter
}