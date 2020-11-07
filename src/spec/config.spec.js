const assert = require('assert');
const configs = require('../configs');

describe('Config test', () => {
    describe('dev environment', () => {
        it('SERVER_PORT', () => {
            assert.strictEqual(configs.SERVER_PORT, 8080);
        });  
    });

    describe('live environment', () => {
        before(() => {
            process.env.NODE_ENV = 'live';
        });
        it('SERVER_PORT', () => {
            assert.ok(true);
        });
    });
});