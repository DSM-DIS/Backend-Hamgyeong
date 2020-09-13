const assert = require('assert');

const DiaryBookService = require('../services/DiaryBookService');
const FakeDiaryBookRepo = require('./fakes/FakeDiaryBookRepo');

describe('diary book service test', () => {
    describe('make new diary book', () => {
        const diary_book_service = new DiaryBookService(FakeDiaryBookRepo);

        describe('success', () => {
            it('success', async () => {
                try{
                    await diary_book_service.makeNewDiaryBook('A', 'AAAA');
                }
                catch (e) {
                    assert.fail(e.message);
                }
            });
        });
    });
});


