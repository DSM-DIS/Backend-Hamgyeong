if(process.env.NODE_ENV == 'dev') {
    require('dotenv').config();
}



module.exports = {
    SERVER_PORT: parseInt(process.env.SERVER_PORT),
}



