const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = "dev";
        let latitude = 100;
        let longitude = 500;
        let url = "https://www.google.com/maps?q=100,500";

        const message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toEqual(from);
        expect(message.url).toEqual(url);
    });
})