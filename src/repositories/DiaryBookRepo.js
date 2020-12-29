const Axios = require('axios');


const axios = Axios.create({
    baseURL: 'http://jeonju:8080/',
    timeout: 1000,
});


class DiaryBookReop {
    static async create(leader, name) {
        return await axios.post('/diary-book', {
            leader: leader,
            diary_name: name
        });
    }
}


module.exports = DiaryBookReop;