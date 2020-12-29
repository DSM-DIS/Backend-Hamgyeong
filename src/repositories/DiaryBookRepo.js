const Axios = require('axios');


const axios = Axios.create({
    baseURL: 'http://jeonju:8080/',
    timeout: 1000,
});


class DiaryBookReop {
    static async create(maker, name) {
        console.log(maker, name);
        return await axios.post('/diary-book', {
            maker: maker,
            name: name
        });
    }
}


module.exports = DiaryBookReop;