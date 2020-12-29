const assert = require('assert');
const configs = require('../configs');

describe('Config test', () => {
    describe('dev environment', () => {
        it('SERVER_PORT', () => {
            assert.strictEqual(configs.SERVER_PORT, 8080);
        });  
    });
});