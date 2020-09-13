

class DiaryBookService {
    constructor(diary_book_repo) {
        this.diary_book_repo = diary_book_repo;
    }

    async makeNewDiaryBook(user_id, name) {
        await this.diary_book_repo.create(user_id, name);
    }
}


module.exports = DiaryBookService;