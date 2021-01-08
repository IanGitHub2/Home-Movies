const express = require('express');

const app = express();

/* Step 2
 * 
 * import routers from controllers/
 *
 */

app.use(express.urlencoded({extended: true}));

app.use(express.json())

app.use(express.static(`${__dirname}/client/build`));

/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */

app.get('/', (req, res) => {
    res.send(`${__dirname}/client/build/index.html`)
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`App is listing on PORT ${PORT}`)
});