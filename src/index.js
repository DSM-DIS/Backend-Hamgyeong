const express = require('express');
const app = express();

const initApp = require('./loaders');
const { SERVER_PORT } = require('./configs');

initApp(app);

app.listen(SERVER_PORT, () => {
    console.log(`listening at ${SERVER_PORT}`);
});

