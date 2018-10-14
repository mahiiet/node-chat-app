const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = "jen";
        let text = "some message";

        const message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toEqual(from);
        expect(message.text).toEqual(text);
    })
});