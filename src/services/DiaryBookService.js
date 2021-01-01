const Axios = require('axios');

class DiaryBookService {
    constructor(diary_book_repo) {
        this.diary_book_repo = diary_book_repo;
    }

    async makeNewDiaryBook(user_id, name) {
        const res = await this.diary_book_repo.create(user_id, name);
        const axios = Axios.create({
            baseURL: 'http://gyeongsang:8893/repositories/',
            timeout: 1000,
        });
        
        await axios.post('/diary-book', {
            userId: user_id,
            code: res.data.invite_code
        });
        return res.data.invite_code;
    }
}


module.exports = DiaryBookService;
