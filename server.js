const express = require('express');

const app = express();

/* Step 2
 * 
 * import routers from controllers/
 *
 */

const { moviesRouter } = require('./controllers/movies.js');

app.use(express.urlencoded({extended: true}));

app.use(express.json())

app.use(express.static(`${__dirname}/client/build`));

/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */

app.use('/api/movies', moviesRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: "hello from express server"});
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is listing on PORT ${PORT}`)
});

// Remember start by saying : nodemon server.js