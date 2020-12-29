const route = require('express').Router();
const DiaryBookService = require('../services/DiaryBookService');
const DiaryBookRepo = require('../repositories/DiaryBookRepo');


const diary_book_service = new DiaryBookService(DiaryBookRepo);

route.post('/diary-book', async (req, res) => {
    const user = req.get('userId');
    const diary_name = req.body.name;

    await diary_book_service.makeNewDiaryBook(user, diary_name);
    res.send('');
});



module.exports = route;
