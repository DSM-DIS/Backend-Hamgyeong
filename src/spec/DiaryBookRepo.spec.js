const assert = require('assert');

const DiaryBookReop = require('../repositories/DiaryBookRepo');

describe('diary book repo test', () => {
    describe('create', () => {
        describe('success', () => {
            it('', async () => {
                try{
                    await DiaryBookReop.create('A', 'asdf');
                }
                catch(e) {
                    assert.fail(e.message);   
                }
            });
        });
    });

});